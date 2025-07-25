import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import JSZip from 'jszip';
import { toGeoJSON } from '@tmcw/togeojson';

function KmzOverlay({ kmzUrl }) {
  const map = useMap();
  const layerRef = useRef(null);

  useEffect(() => {
    async function loadKmz() {
      // Fetch and unzip KMZ
      const response = await fetch(kmzUrl);
      const blob = await response.blob();
      const zip = await JSZip.loadAsync(blob);
      let kmlString = null;
      zip.forEach((relativePath, file) => {
        if (relativePath.endsWith('.kml')) {
          kmlString = file.async('text');
        }
      });
      if (!kmlString) return;
      const kmlText = await kmlString;
      // Parse KML to GeoJSON
      const parser = new DOMParser();
      const kmlDom = parser.parseFromString(kmlText, 'text/xml');
      const geojson = toGeoJSON.kml(kmlDom);
      // Add to map
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
      }
      layerRef.current = L.geoJSON(geojson).addTo(map);
      // Zoom to overlay
      if (geojson.features && geojson.features.length > 0) {
        const bounds = L.geoJSON(geojson).getBounds();
        map.fitBounds(bounds);
      }
    }
    loadKmz();
    return () => {
      if (layerRef.current) {
        map.removeLayer(layerRef.current);
      }
    };
  }, [kmzUrl, map]);
  return null;
}

export default function MapWithKmz({ kmzUrl }) {
  // Default center (France)
  return (
    <div style={{ width: '100%', height: '400px', margin: 'auto' }}>
      <MapContainer center={[43.5, 4.1]} zoom={10} style={{ width: '100%', height: '100%' }} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <KmzOverlay kmzUrl={kmzUrl} />
      </MapContainer>
    </div>
  );
}
