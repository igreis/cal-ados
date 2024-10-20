'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import tenisDuramo from '../assets/duramoRota.png'
import logo from '../assets/image-removebg-preview.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import nike from '../assets/nike-logo-47A65A59D5-seeklogo.com.png'
import adidas from '../assets/adidas.png'
import olympikus from '../assets/olympikus.png'
import { Header } from '../components/header/header'
import { Adulto } from '../components/adulto/adulto'
import { Infantil } from '../components/infantil/infantil'
import Novidades from '../components/novidades/novidades'


export default function LandingPage() {

  const shoes = [
    { id: 1, name: 'Summer Sandal', image: tenisDuramo },
    { id: 2, name: 'Sporty Sneaker', image: tenisDuramo },
  ];
  const [typedText, setTypedText] = useState('')
  const fullText = 'Avenida Bahia 500,  3242-6156'

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 150)
    }
  }, [typedText])

  useEffect(() => {
    if (typedText.length < fullText.length) {
      setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 150)
    }
  }, [typedText])

  return (
    <div className="flex flex-col min-h-screen bg-[#f4ff2b] text-white overflow-x-hidden">
    <Header />

      <main className="flex-1 pt-16">
        <section id="home" className="flex h-[50vh] sm:h-[80vh] lg:h-[60vh]">
          <div className=" mt-[20px] sm:w-full flex flex-col xl:ml-[80px] lg:flex-row sm:flex-col max-w-full lg:ml-[2px] md:mx-aut pr-[50px] dm:mr-[40px] items-center h-full">
            <div className="mb-[50px] ml-[80px] max-[420px] sm:max-w-full sm:min-w-[312px] min-w-[400px]">
              {/* Animação sincronizada para h1 e p */}
              <motion.div
                className="max-w-[600px]  mb-[10px]"
                style={{ color: '#190046' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img src={logo} alt="" className='' />

              </motion.div>

              <motion.div
                className="mt-6 flex ml-[7%] gap-4"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                <a href="#" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors text-sm sm:text-base">
                  Saiba Mais
                </a>
                <a href="#adulto" className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors text-sm sm:text-base">
                  Ver Produtos
                </a>
              </motion.div>

              <motion.div
                className="mt-8 flex ml-[44px] gap-6"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <a href="#" className="text-blue-900 hover:text-yellow-500 transition-colors">
                  <FaWhatsapp size={30} />
                </a>
                <a href="#" className="text-blue-900 hover:text-yellow-500 transition-colors">
                  <FaInstagram size={30} />
                </a>
                <a href="#" className="text-blue-900 hover:text-yellow-500 transition-colors">
                  <FaFacebook size={30} />
                </a>
              </motion.div>
            </div>

            <Swiper
              className='w-[680px] mb-[50px] mr-[180px] '
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000 }}  // Transição automática a cada 3 segundos
              navigation  // Adiciona botões de navegação
              slidesPerView={1}
              loop  // Faz o loop infinito dos slides
            >
              {shoes.map((shoe) => (
                <SwiperSlide key={shoe.id}>
                  <motion.div className='max-h-full'
                    style={{ color: '#190046' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  >
                    <img src={shoe.image} alt={shoe.name} className="object-contain xl:w-[580px] lg:w-[480px]  md:w-[380px] mb-[50px] mr-[10px]" />
                  </motion.div>

                </SwiperSlide>
              ))}
            </Swiper>
            <div className='z-[2] md:flex-col md:gap-[50px] mr-[5%] min-w-[92px] hidden lg:flex'>
              <img src={nike} alt="" className='w-[120px]' />
              <img src={adidas} alt="" className='w-[120px]' />
              <img src={olympikus} alt="" className='w-[120px]' />
            </div>
          </div>
        </section>
        <Novidades />
        <Adulto />
        <Infantil />
      </main>
    </div>
  )
}
