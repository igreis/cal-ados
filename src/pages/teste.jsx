'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Phone } from 'lucide-react'
import tenisDuramo from '../assets/duramo-removebg-preview.png'
import logo from '../assets/image-removebg-preview.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import ImgMediaCard from '../ui/card'

export default function LandingPage() {

  const shoes = [
    { id: 1, name: 'Summer Sandal', image: tenisDuramo },
    { id: 2, name: 'Sporty Sneaker', image: tenisDuramo },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-[#f4ff2b] text-white overflow-x-hidden">
      <header className="fixed top-4 left-4 right-4 z-50 px-4 lg:px-6 h-16 flex items-center bg-[#150047] rounded-full shadow-lg">
        <a className="flex items-center justify-center" href="#">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt=""
            className="h-10 w-10 rounded-full bg-yellow-400"
          />
          <span className="ml-2 text-2xl font-bold text-white">Calçados</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#home">
            Home
          </a>
          <a className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#new-arrivals">
            New Arrivals
          </a>
          <a className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#promotions">
            Promotions
          </a>
          <a className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        
        <section id="home" className="flex justify-center md:h-[60vh] lg:h-[65vh] mt-10 bg-[#150047]">
          <div className="bg-[#ebf629] rounded-full flex lg:flex-row md:flex-col w-[100%] xl:ml-[10px] xl:md-[10px] lg:ml-[60px] md:ml-[60px] lg:gap-[35px] mr-[20px] items-center mx-auto h-full xl:gap-[45px]">
            <div className="mb-[50px] ml-[10%]">
              {/* Animação sincronizada para h1 e p */}
              <motion.div
                className="max-w-[600px] min-w-[460px]"
                style={{ color: '#190046' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img src={logo} alt="" className='' />
              </motion.div>

              <motion.div
                className="flex space-x-4 ml-[350px] mt-[20px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a href="#" className="text-[#190046] hover:text-yellow-400 transition-colors">
                  <Instagram size={40} />
                </a>
                <a href="#" className="text-[#190046] hover:text-yellow-400 transition-colors">
                  <Facebook size={40} />
                </a>
                <a href="#" className="text-[#190046] hover:text-yellow-400 transition-colors">
                  <Phone size={40} />
                </a>
              </motion.div>
            </div>

            

            <Swiper
              className='w-[680px] ml-[80px]'
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000 }}  // Transição automática a cada 3 segundos
              navigation  // Adiciona botões de navegação
              slidesPerView={1}
              loop  // Faz o loop infinito dos slides
            >

              {shoes.map((shoe) => (
                <SwiperSlide key={shoe.id}>
                  <motion.div
                    style={{ color: '#190046' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay:0.5, duration: 1, ease: "easeOut" }}
                  >
                    <img src={shoe.image} alt={shoe.name} className="object-contain transform rotate-[-26deg] xl:w-[580px] lg:w-[480px] md:w-[380px] mb-[200px]" />
                  </motion.div>

                </SwiperSlide>
              ))}
            </Swiper>


          </div>
        </section>

        <section id="new-arrivals" className="h-[90vh] bg-white relative overflow-hidden">
          <h2 className="text-3xl font-bold text-blue-900 text-center py-8">Destaques</h2>
          <div className="w-full pr-[10px] pl-[10px] h-[400px]">
            <motion.div

              style={{ color: '#190046' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >

              <ImgMediaCard />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
