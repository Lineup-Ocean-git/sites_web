import React from 'react';
import './App.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Mail, Phone, Waves, BarChart3, Plane, Search, Microscope } from 'lucide-react';

// Import des nouvelles images et GIF
import metrologieImage from './assets/Metrologie_site_image.png';
import modelisationImage from './assets/modelisation_numerique_image.jpg';
import modelisationGif from './assets/gif_modelisation_numerique_luo.gif';
import suiviImage from './assets/Drone_site_image.JPG';
import diagnosticImage from './assets/diagnostic_integre.png';
import diagnosticGif from './assets/LA-GRANDE-MOTTE_animation_shorelines.gif';
import poissonBio from './assets/poisson_suivi_bio.JPG';

// Images supplémentaires pour les modales
import mesurePercheEau from './assets/mesure_perche_eau.JPG';
import mesurePercheTerre from './assets/mesure_perche_terre.JPG';
import droneBathymetrique from './assets/Drone_bathymetrique.JPG';
import piloteDrone from './assets/pilote_drone_bathymetrique.JPG';
import timeseriesMonthly from './assets/LGM12_timeseries_monthly_monitoring_shoreline.jpg';
import timeseriesSeasonal from './assets/LGM10_timeseries_seasonal_monitoring_shoreline.jpg';

const services = [
  {
    id: 'metrologie',
    title: 'Métrologie',
    subtitle: '',
    image: metrologieImage,
    modalImages: [mesurePercheEau, mesurePercheTerre, droneBathymetrique, piloteDrone],
    icon: <Waves className="w-6 h-6" />,
    objectives: [
      'Caractériser et comprendre les dynamiques hydro-sédimentaires d\'un site',
      'Calculer les effets in-situ de structures côtières (dissipation, affouillement proche ouvrage, etc.)',
      'Calibrer et valider les modèles numériques via des données de terrain de haute précision'
    ],
    description: 'Nous assurons l\'ensemble des étapes, de la planification à l\'analyse des données hydro-sédimentaires, en mobilisant des équipements performants et adaptés aux environnements complexes : Pressiomètres (RBR), Courantomètres (Nortek), Sondes multiparamètres, Drones aériens et de surface. Notre approche est modulable, de l\'intervention ponctuelle à la campagne instrumentée de longue durée, pour des projets d\'ingénierie côtière, de gestion du littoral, de suivi environnemental ou de recherche.',
    livrables: [
      'Rapport d\'analyse des dynamiques hydrosédimentaires',
      'Rendus 2D : cartes SIG, MNT bathymétriques, etc.',
      'Données brutes et traitement automatisé (scripts Python)',
      'Note technique vulgarisée pour la concertation'
    ],
    references: [
      {
        title: 'SURFREEF (2025) - Plan Littoral 21 (État/Région Occitanie)',
        description: 'Caractérisation de la dissipation'
      },
      {
        title: 'EGAM (2025) - Agglomération de Pays de l\'Or Méditerranée',
        description: 'Campagnes topo-bathymétriques par drone aérien et de surface pour calibration et validation de modèles numériques'
      }
    ],
    contacts: [
      { name: 'Mathis Cathala', role: 'Ingénieur Océanographe', email: 'mathis.cathala@lineup-ocean.com', phone: '+33 6 45 18 41 47' },
      { name: 'Mathieu Soulayrol', role: 'Ingénieur Océanographe', email: 'mathieu.soulayrol@lineup-ocean.com', phone: '+33 7 55 68 96 55' }
    ]
  },
  {
    id: 'modelisation',
    title: 'Modélisation Numérique Hydro-Sédimentaire',
    subtitle: '',
    image: modelisationImage,
    gif: modelisationGif,
    modalImages: [],
    icon: <BarChart3 className="w-6 h-6" />,
    objectives: [
      'Simuler et anticiper les dynamiques hydro-sédimentaires à différentes échelles spatiales et temporelles, et sous divers forçages météo-océaniques',
      'Produire des indicateurs d\'évolution du littoral : évolution de la submersion marine, du trait de côte, bilan sédimentaire, etc.',
      'Comparer et optimiser des solutions d\'ingénierie (ouvrages durs, solutions hybrides et/ou bio-inspirées)',
      'Appuyer les prises de décision en ingénierie maritime et écologique et en gestion intégrée du littoral'
    ],
    description: 'Fort de notre expertise en océanographie physique, nous nous servons de la modélisation numérique afin de simuler les interactions hydro-sédimentaires, dans le but de mieux comprendre, anticiper et orienter les choix d\'aménagement côtier. Notre approche repose sur une analyse multi-échelle, adaptée aux enjeux spécifiques de chaque site définis en concertation avec vous. Nous utilisons un panel de logiciels reconnus dans les domaines de l\'océanographie physique et de l\'ingénierie maritime, tels que XBeach, OpenTelemac-Mascaret (Telemac2D, Tomawac), Celeris Advent ou encore Flow 3D pour des simulations à haute résolution via la CAO.',
    livrables: [
      'Rapport scientifique (détaillé ou synthétique) incluant méthodologie, résultats et interprétation',
      'Rendus 2D : champs de courant, de hauteur de houle, évolution du trait de côte, évolution des niveaux de submersion',
      'Bilan morpho-sédimentaires',
      'Schémas conceptuels de fonctionnement hydro-sédimentaire'
    ],
    references: [
      {
        title: 'EGAM (2025) - Agglomération de Pays de l\'Or Méditerranée',
        description: 'Étude numérique de l\'évolution des services hydro-sédimentaires rendus par les brise-lames et les épis en contexte de changement climatique. Outils utilisés : OpenTelemac-Mascaret, XBeach'
      },
      {
        title: 'SURFREEF (2024) - Plan Littoral 21 (État/Région Occitanie)',
        description: 'Outils utilisés : Delft3D, OpenTelemac-Mascaret, XBeach'
      },
      {
        title: 'EMBRUNS (2023) - SNCF Réseau',
        description: 'Modélisation numérique d\'une solution innovante de "convertisseurs-déviateurs" de vagues visant à protéger une voie ferrée de la corrosion dans l\'étang de Bages-Sigean. Outil utilisé : Celeris Advent'
      }
    ],
    contacts: [
      { name: 'Mathis Cathala', role: 'Ingénieur Océanographe', email: 'mathis.cathala@lineup-ocean.com', phone: '+33 6 45 18 41 47' },
      { name: 'Mathieu Soulayrol', role: 'Ingénieur Océanographe', email: 'mathieu.soulayrol@lineup-ocean.com', phone: '+33 7 55 68 96 55' }
    ]
  },
  {
    id: 'suivi',
    title: 'Suivi du Littoral / Drone Aérien',
    subtitle: '',
    image: suiviImage,
    modalImages: [],
    icon: <Plane className="w-6 h-6" />,
    objectives: [
      'Suivre l\'évolution morphologique et écologique long-terme et/ou suite à des événements extrêmes de manière précise'
    ],
    description: 'Nous proposons une solution innovante basée sur l\'utilisation de drones de haute précision pour réaliser des relevés rapides et non invasifs permettant une étude fine et actualisée de la dynamique côtière et la caractérisation des habitats naturels. Couplées à des modèles de submersion et analysées par notre équipe spécialisée et pluridisciplinaire, nos études offrent une vision globale, actualisée et reproductible du système dune-plage. Cette méthode innovante permet de suivre non seulement l\'évolution du trait de côte avec une précision constante, mais aussi l\'analyse de l\'impact des événements climatiques extrêmes.',
    livrables: [
      'Analyse morpho-dynamique diachronique du système dune-plage (différentiels de transect, différentiels de MNT, différentiels de cubature, etc.)',
      'État morphologique à instant T du système dune-plage (position du trait de côte, cubature de plage émergée / immergée / dune, état structurel des ouvrages de protection, végétation dunaire)',
      'Demandes personnalisées (flotte de drones polyvalents à disposition, mutualisation possible avec nos services de modélisation et de diagnostic environnemental, etc.)'
    ],
    references: [
      {
        title: 'SURFREEF (2024) - Plan Littoral 21 (État/Région Occitanie)',
        description: 'À COMPLÉTER'
      }
    ],
    contacts: [
      { name: 'Antoine Tabeaud', role: 'Chargé de projet environnement marin', email: 'antoine.tabeaud@lineup-ocean.com', phone: '+33 6 78 41 26 59' },
      { name: 'Mathis Cathala', role: 'Ingénieur Océanographe', email: 'mathis.cathala@lineup-ocean.com', phone: '+33 6 45 18 41 47' }
    ]
  },
  {
    id: 'diagnostic-hydro',
    title: 'Diagnostic Hydro-Sédimentaire',
    subtitle: '',
    image: diagnosticImage,
    gif: diagnosticGif,
    modalImages: [timeseriesMonthly, timeseriesSeasonal],
    icon: <Search className="w-6 h-6" />,
    objectives: [
      'Compiler et analyser l\'ensemble des données disponibles hydrodynamiques et morpho-sédimentaires',
      'Caractériser les dynamiques hydro-sédimentaires',
      'Identifier les aléas (érosion, submersion) et qualifier les risques associés',
      'Proposer des préconisations opérationnelles en appui à la gestion ou à la conception d\'ouvrages adaptés'
    ],
    description: 'Nous réalisons des diagnostics hydro-sédimentaires qui analysent les composantes physiques d\'un site, en nous appuyant sur une approche systémique et multi-échelle. Notre expertise en océanographie physique et analyse spatiale nous permet de caractériser finement l\'état initial d\'un milieu, de comprendre son fonctionnement hydro-sédimentaire, et de guider les stratégies d\'aménagement.',
    livrables: [
      'État de l\'art et synthèse bibliographique',
      'Rendus 2D : évolution du trait de côte, carte d\'aléa et de risque',
      'Rendus 1D : moyennes mensuelles et saisonnières de l\'évolution du trait de côte et de la surface de plage',
      'Schémas conceptuels de fonctionnement hydro-sédimentaire',
      'Fiches de préconisations pour la gestion ou l\'aménagement'
    ],
    references: [
      {
        title: 'SURFREEF (2023) - Plan Littoral 21 (État/Région Occitanie)',
        description: 'Compilation et analyse de paramètres hydro-sédimentaires. Identification des enjeux socio-économiques et réglementaires.'
      },
      {
        title: 'EXP\'EAU (2024) - La Grande Motte',
        description: 'Études de faisabilité et préliminaire pour le déploiement d\'un écomusée subaquatique dans l\'avant-port de La Grande Motte : étude comparative des différents sites identifiés, identification des enjeux socio-culturels et environnementaux, plans d\'aménagements.'
      }
    ],
    contacts: [
      { name: 'Mathis Cathala', role: 'Ingénieur Océanographe', email: 'mathis.cathala@lineup-ocean.com', phone: '+33 6 45 18 41 47' },
      { name: 'Mathieu Soulayrol', role: 'Ingénieur Océanographe', email: 'mathieu.soulayrol@lineup-ocean.com', phone: '+33 7 55 68 96 55' },
      { name: 'Loïs Barotin', role: 'Chargée d\'études aménagement du littoral', email: 'lois.barotin@lineup-ocean.com', phone: '+33 6 17 15 33 80' }
    ]
  },
  {
    id: 'diagnostic-bio',
    title: 'Diagnostic Bio-Écologique',
    subtitle: '',
    image: poissonBio,
    modalImages: [],
    icon: <Microscope className="w-6 h-6" />,
    objectives: [
      'Compiler et analyser l\'ensemble des données disponibles bio-écologiques et satellitaires',
      'Identifier les biocénoses et habitats sensibles',
      'Proposer des préconisations opérationnelles en appui à la restauration écologique'
    ],
    description: 'Nous réalisons des diagnostics bio-écologiques qui analysent les composantes écologiques d\'un site, en nous appuyant sur une approche systémique et multi-échelle. Notre expertise en écologie marine, plongée scientifique et analyse spatiale nous permet de caractériser finement l\'état initial d\'un milieu, de comprendre son fonctionnement écologique, et de guider les stratégies de conservation.',
    livrables: [
      'État de l\'art et synthèse bibliographique',
      'Rendus 2D : cartographie des habitats',
      'Caractérisation écologique détaillée',
      'Fiches de préconisations pour la restauration écologique'
    ],
    references: [
      {
        title: 'SURFREEF (2023) - Plan Littoral 21 (État/Région Occitanie)',
        description: 'Compilation et analyse de paramètres environnementaux. Identification des enjeux socio-économiques et réglementaires.'
      },
      {
        title: 'Merveille (2024) - Institut marin du SEAQUARIUM',
        description: 'État initial de la plage des Merveilles au Grau du Roi dans le cadre de l\'Aire Marine Éducative gérée par le Seaquarium : inspection des biocénoses en présence.'
      },
      {
        title: 'EXP\'EAU (2024) - La Grande Motte',
        description: 'Caractérisation écologique pour le déploiement d\'un écomusée subaquatique dans l\'avant-port de La Grande Motte.'
      }
    ],
    contacts: [
      { name: 'Mathis Cathala', role: 'Ingénieur Océanographe', email: 'mathis.cathala@lineup-ocean.com', phone: '+33 6 45 18 41 47' },
      { name: 'Mathieu Soulayrol', role: 'Ingénieur Océanographe', email: 'mathieu.soulayrol@lineup-ocean.com', phone: '+33 7 55 68 96 55' },
      { name: 'Loïs Barotin', role: 'Chargée d\'études aménagement du littoral', email: 'lois.barotin@lineup-ocean.com', phone: '+33 6 17 15 33 80' }
    ]
  }
];

function App() {
  const [selectedService, setSelectedService] = React.useState(null);

  // Fonction pour fermer la modale
  const closeModal = () => {
    setSelectedService(null);
  };

  // Fonction pour gérer le clic sur le backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-[var(--lineup-orange)]">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[var(--lineup-blue-dark)] mb-2">
              LINEUP OCEAN
            </h1>
            <p className="text-xl text-[var(--lineup-blue)] font-medium mb-4">
              Coastal Resilience
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              LINEUP OCEAN est une société à taille humaine, disponible et engagée, experte des environnements marins et côtiers. 
              Grâce à une équipe pluri-disciplinaire composée d'océanographes, de biologistes et écologues marins, 
              de plongeurs scientifiques et de spécialistes en gestion intégrée du littoral, nous adoptons une 
              approche systémique pour répondre efficacement à l'ensemble de vos besoins en milieu marin et côtier.
            </p>
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--lineup-blue-dark)] mb-4">
            Nos Services Océanographiques
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez notre gamme complète de services pour vos projets marins et côtiers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[var(--lineup-orange)] group"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {service.gif ? (
                  <img 
                    src={service.gif} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute top-4 left-4 bg-[var(--lineup-blue-dark)] text-white p-2 rounded-full">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-[var(--lineup-blue-dark)] text-lg">
                  {service.title}
                </CardTitle>
                {service.subtitle && (
                  <CardDescription className="text-[var(--lineup-blue)] font-medium">
                    {service.subtitle}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Button 
                  className="w-full bg-[var(--lineup-orange)] hover:bg-[var(--lineup-orange)]/90 text-[var(--lineup-blue-dark)] font-semibold"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Bouton de fermeture fixe */}
            <button 
              onClick={closeModal}
              className="fixed top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 shadow-lg z-10"
              style={{ position: 'sticky', top: '1rem', left: 'calc(100% - 3rem)' }}
            >
              ✕
            </button>
            
            <div className="relative">
              {selectedService.gif ? (
                <img 
                  src={selectedService.gif} 
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                />
              ) : (
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="absolute bottom-4 left-4 bg-[var(--lineup-blue-dark)] text-white p-3 rounded-full">
                {selectedService.icon}
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-[var(--lineup-blue-dark)] mb-2">
                {selectedService.title}
              </h2>
              {selectedService.subtitle && (
                <p className="text-xl text-[var(--lineup-blue)] font-medium mb-6">
                  {selectedService.subtitle}
                </p>
              )}

              {/* Images supplémentaires dans la modale */}
              {selectedService.modalImages && selectedService.modalImages.length > 0 && (
                <div className="mb-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedService.modalImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${selectedService.title} ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Carte Leaflet avec KMZ pour Suivi du Littoral / Drone Aérien */}
              {selectedService.id === 'suivi' && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[var(--lineup-blue-dark)] mb-4">
                    Orthophotographie (Google Earth KMZ)
                  </h3>
                  <React.Suspense fallback={<div>Chargement de la carte...</div>}>
                    {typeof window !== 'undefined' && (
                      (() => {
                        const MapWithKmz = require('./components/MapWithKmz.jsx').default;
                        return <MapWithKmz kmzUrl={
                          'https://drive.google.com/uc?export=download&id=1fnSjKjp_6qSaNSSba-se7gxRA2mgyB93'
                        } />;
                      })()
                    )}
                  </React.Suspense>
                </div>
              )}

              {/* Objectifs */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--lineup-blue-dark)] mb-4">
                  Objectifs du service
                </h3>
                <ul className="space-y-2">
                  {selectedService.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--lineup-orange)] mr-2">•</span>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--lineup-blue-dark)] mb-4">
                  Description du service
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Livrables */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--lineup-blue-dark)] mb-4">
                  Types de livrables
                </h3>
                <ul className="space-y-2">
                  {selectedService.livrables.map((livrable, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[var(--lineup-orange)] mr-2">•</span>
                      <span className="text-gray-700">{livrable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Références */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[var(--lineup-blue-dark)] mb-4">
                  Références
                </h3>
                <div className="space-y-4">
                  {selectedService.references.map((reference, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[var(--lineup-blue)] mb-2">
                        {reference.title}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {reference.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacts */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[var(--lineup-blue-dark)] mb-4">
                  Référents techniques
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.contacts.map((contact, index) => (
                    <div key={index} className="bg-[var(--lineup-blue-dark)] text-white p-4 rounded-lg">
                      <h4 className="font-semibold mb-1">{contact.name}</h4>
                      <p className="text-[var(--lineup-orange)] text-sm mb-2">{contact.role}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href={`mailto:${contact.email}`} className="hover:text-[var(--lineup-orange)]">
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${contact.phone}`} className="hover:text-[var(--lineup-orange)]">
                            {contact.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[var(--lineup-blue-dark)] text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-2">LINEUP OCEAN</h3>
          <p className="text-[var(--lineup-orange)] mb-4">Coastal Resilience</p>
          <p className="text-gray-300">
            Société à taille humaine, disponible et engagée, experte des environnements marins et côtiers.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

