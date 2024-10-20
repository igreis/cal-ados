'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/image-removebg-preview.png'
import 'swiper/css/navigation';
import 'swiper/css';
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Header } from '../components/header/header'
import { Adulto } from '../components/adulto/adulto'
import { Infantil } from '../components/infantil/infantil'
import Novidades from '../components/novidades/novidades'
import {Categorias} from '../components/categorias/categorias'


export default function LandingPage() {

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
        <section id="home" className="flex sm:h-[50vh] justify-center ">
          <div className="flex md:flex-row flex-col justify-center items-center w-[1200px] gap-[5%] h-[350px] md:h-full">
            <div className="md:w-full md:ml-[50px] mx-[20px] ">
              <motion.div 
                className="max-w-[600px] mb-[10px]"
                style={{ color: '#190046' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img src={logo} alt="" className='' />
              </motion.div>

              <motion.div
                className="mt-6 flex ml-[6%] gap-4"
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

            <div className="flex flex-col items-start mr-[20px] md:block hidden">
              <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#150045] whitespace-nowrap italic">Avenida Bahia 500</h1>
              <h2 className="text-6xl font-semibold text-[#e00004] italic">3242-6156</h2>
              </div>
              <div className='mt-[30px]'>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#150045] whitespace-nowrap italic">Avenida Brasil 1010</h1>
              <h2 className="text-6xl font-semibold text-[#e00004] italic">3242-6156</h2>
              </div>
            </div>
          </div>
        </section>

        
        <Novidades />
        <Categorias />
        <Adulto />
        <Infantil />
      </main>
    </div>
  )
}
