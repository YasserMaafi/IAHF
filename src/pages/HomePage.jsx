import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiBookOpen, FiUsers, FiBriefcase, FiCalendar } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function HomePage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/programs')
      .then(res => {
        setPrograms(res.data.slice(0, 3)); // Show only 3 featured programs
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* African-Themed Hero Section */}
      <header className="relative bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/IAHF_logo.png')] opacity-10"></div>
        <div className="absolute top-5 right-5 w-24 h-24 opacity-50">
          <img src="/src/assets/charte iahf 1.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 left-5 w-20 h-20 opacity-45">
          <img src="/src/assets/charte iahf 2.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="block">AFRICAIN DE HAUTE FORMATION</span>
            <span className="block text-2xl md:text-3xl font-light mt-2">LAH Academy</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">Excellence in African Professional Training</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/programs" 
              className="px-8 py-3 bg-white text-green-800 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Explore Programs
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border-2 border-white rounded-lg font-medium hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* IAHF Introduction & Gallery */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute top-5 right-5 w-20 h-20 opacity-35">
          <img src="/src/assets/charte iahf 3.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 left-5 w-16 h-16 opacity-30">
          <img src="/src/assets/charte iahf 4.png" alt="" className="w-full h-full object-contain" />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-green-800">IAHF : Centre de Formation Professionnelle</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img 
              src="/src/assets/IMG_2172.JPG" 
              alt="Campus IAHF" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/src/assets/IMG_2257.JPG" 
              alt="Étudiants IAHF" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="/src/assets/IMG_2191.JPG" 
              alt="Salle de classe" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/src/assets/IMG_2196.JPG" 
              alt="Laboratoire" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="/src/assets/1708009132233.png" 
              alt="Formation technique" 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/src/assets/1708009132277.png" 
              alt="Atelier pratique" 
              className="w-full h-40 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
          <div className="space-y-4">
            <img 
              src="/src/assets/image00142.jpeg" 
              alt="Projet étudiant" 
              className="w-full h-32 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
            <img 
              src="/src/assets/graduation.jpg" 
              alt="Formation IT" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-30">
          <img src="/src/assets/charte iahf 5.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-green-800">Nos Programmes Phares</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Programmes de formation professionnelle conçus pour l'excellence
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-800"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => {
              const programImages = {
                "Développement Web Full Stack": '/src/assets/fullstack.png',
                "Maintenance Informatique": '/src/assets/maintenance.jpeg',
                "Marketing Digital": '/src/assets/marketing.png'
              };

              const imgSrc = programImages[program.title] || program.image_url || '/src/assets/default-program.jpg';

              return (
                <div 
                  key={program.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative h-48 bg-gray-100">
                    <img
                      src={imgSrc}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.src = '/src/assets/default-program.jpg'}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-green-800 text-white text-xs px-3 py-1 rounded-full">
                      {program.category || 'Technology'}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{program.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {program.description || 'Professional training program'}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <FiCalendar className="mr-2 text-yellow-600" />
                      {program.duration || 'Flexible duration'}
                    </div>

                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center font-medium text-green-800 hover:text-green-600 transition-colors"
                    >
                      View details <FiArrowRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Link 
            to="/programs" 
            className="inline-block px-8 py-3 border-2 border-green-800 text-green-800 rounded-lg font-bold hover:bg-green-800 hover:text-white transition-all"
          >
            View all programs
          </Link>
        </div>
      </section>

      {/* Why Choose Us - African Color Cards */}
      <section className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 opacity-70">
              <img src="/src/assets/charte iahf 4.png" alt="" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-green-800">Why Choose Our Academy?</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="absolute bottom-5 right-10 w-18 h-18 opacity-25">
            <img src="/src/assets/charte iahf 2.png" alt="" className="w-full h-full object-contain" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-green-600">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBookOpen className="text-green-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">African Excellence</h3>
              <p className="text-gray-600">
                Programs designed specifically for African professional contexts
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-yellow-500">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry leaders across Africa
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border-t-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBriefcase className="text-red-800 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600">
                Dedicated job placement assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute top-10 left-5 w-16 h-16 opacity-30">
          <img src="/src/assets/charte iahf 1.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 right-5 w-18 h-18 opacity-35">
          <img src="/src/assets/charte iahf 6.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-green-800">Témoignages</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Ce que disent nos étudiants</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-green-600',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-green-800'
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/ahmed.jpg" 
                  alt="Ahmed Ben Othmen" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Ahmed Ben Othmen</h4>
                  <p className="text-sm text-green-600">BTS Marketing et Multimédias</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Men akther l hajet eli rathouni fel IAHF hiya la flexibilité du temps eli khaletni nwafak mabin khedmti w 9rayti. Les cours compatible m3a l marché d'emploi w l'environnement yeser familial."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/nour.jpg" 
                  alt="Nour Rawefi" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Nour Rawefi</h4>
                  <p className="text-sm text-green-600">BTP Soutien en informatique de gestion</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Men akther lhajet eli khalewni nakhtar l'IAHF awel haja les stages garantis w les frais yeser abordables - 130 dt par mois pour le BTP."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/weal.jpg" 
                  alt="Wael Boussa" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Wael Boussa</h4>
                  <p className="text-sm text-green-600">BTS Marketing et Multimédias</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Lawajet barcha 3la l marketing w ken l'IAHF twafer BTS Marketing et Multimédias w diplôme homologué. Blaset centre behya 9riba mel les moyens de transports."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/fereil.jpg" 
                  alt="Feriel Mhadhbi" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Feriel Mhadhbi</h4>
                  <p className="text-sm text-green-600">BTS Commerce International</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Aham haja fel l'IAHF enou les cours yeser pratiques w diplôme homologé. Ena merteha barcha m3a les formateurs w fama discipline kbira."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/ahmed.jpg" 
                  alt="Student" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Étudiant IAHF</h4>
                  <p className="text-sm text-green-600">Formation Professionnelle</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "L'IAHF m'a donné les compétences nécessaires pour réussir dans ma carrière. Les formateurs sont excellents et l'environnement d'apprentissage est parfait."
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="/src/assets/nour.jpg" 
                  alt="Student" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Diplômé IAHF</h4>
                  <p className="text-sm text-green-600">Développement Web</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                "Grâce à la formation à l'IAHF, j'ai pu décrocher un emploi dans le domaine du développement web. La qualité de l'enseignement est remarquable."
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Quick Links - African Colors */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="absolute top-5 left-5 w-16 h-16 opacity-25">
          <img src="/src/assets/charte iahf 2.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 right-5 w-20 h-20 opacity-30">
          <img src="/src/assets/charte iahf 4.png" alt="" className="w-full h-full object-contain" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            to="/programs" 
            className="group border-2 border-green-600 rounded-xl p-6 hover:bg-green-600 transition-all"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">All Programs</h3>
            <p className="text-gray-600 group-hover:text-white/80">
              Discover our complete professional training catalog
            </p>
            <div className="mt-4 text-green-600 group-hover:text-white flex items-center">
              Explore <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link 
            to="/Stage" 
            className="group border-2 border-yellow-500 rounded-xl p-6 hover:bg-yellow-500 transition-all"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Notre Stages</h3>
            <p className="text-gray-600 group-hover:text-white/80">
              Track your enrollment status
            </p>
            <div className="mt-4 text-yellow-600 group-hover:text-white flex items-center">
              Check status <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link 
            to="/contact" 
            className="group border-2 border-red-600 rounded-xl p-6 hover:bg-red-600 transition-all"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Contact Us</h3>
            <p className="text-gray-600 group-hover:text-white/80">
              Our team is available for your questions
            </p>
            <div className="mt-4 text-red-600 group-hover:text-white flex items-center">
              Get in touch <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>



      {/* Sponsors Section */}
      <section className="relative bg-gray-50 py-16">
        <div className="absolute top-5 right-5 w-20 h-20 opacity-40">
          <img src="/src/assets/charte iahf 3.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-5 left-5 w-18 h-18 opacity-35">
          <img src="/src/assets/charte iahf 6.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-20 left-20 w-14 h-14 opacity-25">
          <img src="/src/assets/charte iahf 1.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-green-800">Nos Partenaires</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Ils nous font confiance</p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
          >
            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                <img 
                  src="/src/assets/figs.png" 
                  alt="Partenaire 1" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                <img 
                  src="/src/assets/idrac.png" 
                  alt="Partenaire 2" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                <img 
                  src="/src/assets/wis-logo.png" 
                  alt="Partenaire 3" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                <img 
                  src="/src/assets/sup-de-com-logo.png" 
                  alt="Partenaire 4" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                <img 
                  src="/src/assets/charte iahf 5.png" 
                  alt="Partenaire 5" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24">
                <img 
                  src="/src/assets/charte iahf 6.png" 
                  alt="Partenaire 6" 
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* African-Themed Footer */}
      <footer className="relative bg-green-800 text-white py-12">
        <div className="absolute top-5 right-5 w-20 h-20 opacity-45">
          <img src="/src/assets/charte iahf 1.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-40">
          <img src="/src/assets/charte iahf 5.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AFRICAIN DE HAUTE FORMATION</h3>
            <p className="text-green-200">
              LAH Academy - Professional training excellence in Africa
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-green-200 hover:text-yellow-400">Home</Link></li>
              <li><Link to="/programs" className="text-green-200 hover:text-yellow-400">Programs</Link></li>
              <li><Link to="/about" className="text-green-200 hover:text-yellow-400">About</Link></li>
              <li><Link to="/contact" className="text-green-200 hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <address className="not-italic text-green-200">
              <p>Training Center, Tunis</p>
              <p className="mt-2">contact@afhformation.tn</p>
              <p className="mt-2">+216 71 234 567</p>
            </address>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <p className="text-green-200">Monday - Friday</p>
            <p className="text-green-200">8:30 AM - 5:30 PM</p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
          <p>© {new Date().getFullYear()} AFRICAIN DE HAUTE FORMATION. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;