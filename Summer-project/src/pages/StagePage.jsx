import { FiFileText, FiUsers, FiBriefcase, FiCheckCircle } from 'react-icons/fi';

function StagePage() {
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
            Stages Professionnels
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Expérience pratique et insertion professionnelle</p>
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
          <h2 className="text-3xl font-bold text-green-800 mb-6">Notre Engagement Stage</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Mise à part l'enseignement et l'encadrement pédagogique au sein des étudiants au sein de notre institut, 
            nous prenons en charge de leurs fournir des stages certifiés au sein des entreprises.
          </p>
        </div>

        {/* Stage Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Stage 1ère Année */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <FiUsers className="text-yellow-600 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800">Stage d'Observation</h3>
                <p className="text-gray-600">1ère Année</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Le stage d'observation vous permettra de découvrir le monde du travail, d'avoir un aperçu de ce que 
              pourrait être le métier que vous avez choisi, d'acquérir une certaine expérience sur le terrain que 
              l'on n'obtient pas en cours, de rencontrer des professionnels ce qui vous permet de vous présenter 
              auprès d'eux et d'enrichir votre CV.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Documents Nécessaires :</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                01 copie de Rapport de stage
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Une copie Numérisée sur CD-Rom (Rapport)
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                02 copies d'attestation de stage certifiées conformes
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Fiche d'évaluation du stagiaire par l'entreprise
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Journal de stage IAHF
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Page de garde
              </li>
            </ul>
          </div>

          {/* Stage 2ème Année */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <FiBriefcase className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800">Stage d'Intégration</h3>
                <p className="text-gray-600">2ème Année</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ce stage final vient à la fin de votre formation. Il a pour objectif de développer l'innovation et 
              l'indépendance, de renforcer le sens de responsabilité et l'esprit de travail en équipe. Les stagiaires 
              doivent mettre en œuvre de manière innovante ce qu'ils ont appris pendant leurs formations, et faire 
              preuve de leurs connaissances et compétences.
            </p>

            <h4 className="text-lg font-bold text-gray-900 mb-4">Documents Nécessaires :</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                03 copies de PFF
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Une copie Numérisée sur CD-Rom (Rapport)
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                02 copies d'attestation de stage certifiées conformes
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Fiche d'évaluation du stagiaire par l'entreprise
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Journal de stage IAHF
              </li>
              <li className="flex items-start">
                <FiCheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                Page de garde
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Nos Partenaires Professionnels</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
            Nos partenaires professionnels nous font confiance et accueillent nos stagiaires en garantissant 
            l'encadrement et le suivi. Nos stagiaires sont tenus de bien représenter l'Institut dans l'entreprise d'accueil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FiBriefcase className="text-green-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Sociétés Commerciales</h3>
              <p className="text-gray-600 text-sm">Entreprises du secteur commercial</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FiFileText className="text-blue-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Assurances & Banques</h3>
              <p className="text-gray-600 text-sm">Secteur financier et assurance</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FiUsers className="text-yellow-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Sociétés Offshore</h3>
              <p className="text-gray-600 text-sm">Commissionnaires en douanes</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
          <div className="flex items-start">
            <FiFileText className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <div>
              <h3 className="text-lg font-bold text-red-800 mb-2">Important</h3>
              <p className="text-red-700">
                En cas de retard ou non dépôt des documents, le stagiaire doit présenter une demande à 
                l'administration qui fixera une date ultérieure pour la soutenance. Tous les documents 
                doivent être déposés dans les délais fixés par l'administration de l'IAHF.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StagePage;