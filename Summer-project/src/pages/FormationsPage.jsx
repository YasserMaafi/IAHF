import { FiClock, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';

function FormationsPage() {
  const formationsContinues = [
    {
      id: 1,
      title: "Comptabilité Générale",
      duration: "3 mois",
      level: "Débutant à Intermédiaire",
      description: "Formation complète en comptabilité générale, tenue des livres comptables et établissement des états financiers.",
      modules: ["Principes comptables", "Journal et Grand Livre", "Bilan et Compte de Résultat", "TVA et Fiscalité"]
    },
    {
      id: 2,
      title: "Informatique Bureautique",
      duration: "2 mois",
      level: "Tous niveaux",
      description: "Maîtrise des outils bureautiques essentiels : Word, Excel, PowerPoint et navigation Internet.",
      modules: ["Microsoft Word", "Microsoft Excel", "PowerPoint", "Internet et Email"]
    },
    {
      id: 3,
      title: "Langues Étrangères",
      duration: "4 mois",
      level: "Débutant à Avancé",
      description: "Cours de langues pour améliorer vos compétences linguistiques professionnelles.",
      modules: ["Anglais des Affaires", "Français Professionnel", "Communication Orale", "Rédaction"]
    },
    {
      id: 4,
      title: "Gestion des Ressources Humaines",
      duration: "3 mois",
      level: "Intermédiaire",
      description: "Formation aux techniques de gestion du personnel et administration des ressources humaines.",
      modules: ["Recrutement", "Gestion de Paie", "Droit du Travail", "Formation du Personnel"]
    },
    {
      id: 5,
      title: "Marketing Digital",
      duration: "2 mois",
      level: "Débutant à Intermédiaire",
      description: "Stratégies marketing digitales, réseaux sociaux et e-commerce pour développer votre activité.",
      modules: ["Réseaux Sociaux", "SEO/SEA", "E-commerce", "Analytics"]
    },
    {
      id: 6,
      title: "Secrétariat de Direction",
      duration: "3 mois",
      level: "Intermédiaire",
      description: "Techniques de secrétariat moderne, gestion d'agenda et communication professionnelle.",
      modules: ["Communication", "Gestion d'Agenda", "Rédaction", "Protocole"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* African-Themed Header */}
      <header className="relative bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/IAHF_logo.png')] opacity-10"></div>
        <div className="absolute top-5 right-5 w-24 h-24 opacity-50">
          <img src="/src/assets/charte iahf 1.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 left-5 w-20 h-20 opacity-45">
          <img src="/src/assets/charte iahf 2.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Formations Continues
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Développez vos compétences professionnelles</p>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute top-5 right-5 w-20 h-20 opacity-35">
          <img src="/src/assets/charte iahf 3.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-30">
          <img src="/src/assets/charte iahf 5.png" alt="" className="w-full h-full object-contain" />
        </div>

        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Nos Formations Continues</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            L'IAHF propose des formations continues adaptées aux besoins du marché du travail. 
            Ces formations courtes et intensives permettent aux professionnels d'acquérir de nouvelles 
            compétences ou de perfectionner leurs connaissances existantes.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiClock className="text-green-800 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Formations Courtes</h3>
            <p className="text-gray-600 text-sm">Programmes intensifs de 2 à 4 mois</p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Petits Groupes</h3>
            <p className="text-gray-600 text-sm">Encadrement personnalisé</p>
          </div>

          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiAward className="text-red-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Certification</h3>
            <p className="text-gray-600 text-sm">Attestation de formation</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiBookOpen className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-bold mb-2">Pratique</h3>
            <p className="text-gray-600 text-sm">Approche pratique et professionnelle</p>
          </div>
        </div>

        {/* Formations Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {formationsContinues.map((formation) => (
            <div key={formation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-800 text-white text-xs px-3 py-1 rounded-full">
                    {formation.level}
                  </span>
                  <div className="flex items-center text-sm text-gray-600">
                    <FiClock className="mr-1 text-yellow-600" />
                    {formation.duration}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{formation.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{formation.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Modules :</h4>
                  <div className="flex flex-wrap gap-2">
                    {formation.modules.map((module, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {module}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-800 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-green-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Intéressé par nos formations ?</h2>
          <p className="mb-6">Contactez-nous pour plus d'informations ou pour vous inscrire</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Nous Contacter
            </a>
            <a 
              href="tel:+21671234567" 
              className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-green-800 transition-colors"
            >
              +216 71 234 567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormationsPage;