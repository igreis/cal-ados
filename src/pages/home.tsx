'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import tenisDuramo from '../assets/duramo-Photoroom.png'
import logo from '../assets/image-removebg-preview.png'
import logoP from '../assets/logoC-removebg-preview.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import ImgMediaCard from '../ui/card'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { Man, Woman } from '@mui/icons-material';
import { Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function LandingPage() {

  const shoes = [
    { id: 1, name: 'Summer Sandal', image: tenisDuramo },
    { id: 2, name: 'Sporty Sneaker', image: tenisDuramo },
  ];
  const [typedText, setTypedText] = useState('')
  const fullText = 'Avenida Bahia 500,  3242-6156'
  const [genero, setGenero] = useState<string>('masculino')
  const [shoeType, setShoeType] = useState<string>('masculino')

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

  const handleGener = (event: ChangeEvent<HTMLInputElement>) => {
    setGenero(event.target.value)
  }

  const handleType = (event: ChangeEvent<HTMLInputElement>) => {
    setShoeType(event.target.value)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f4ff2b] text-white overflow-x-hidden">
      <header className="fixed top-4 left-4 right-4 z-50 px-4 lg:px-6 h-16 flex items-center bg-[#150047] rounded-full shadow-lg">
        <a className="flex items-center justify-center" href="#">
          <img
            src={logoP}
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
        <div
          className="absolute inset-0 lg:bg-yellow-400 lg:[clip-path:polygon(40%_0,_100%_0,_100%_100%,_100%_100%)] "
        ></div>
        <section id="home" className="flex  md:h-[80vh] lg:h-[65vh] mt-10">
          <div className="sm:w-full flex flex-col xl:ml-[60px] lg:flex-row sm:flex-col max-w-full lg:ml-[2px] md:ml-[60px] lg:gap-[35px] mr-[40px] items-center mx-auto h-full xl:gap-[45px]">
            <div className="mb-[50px] ml-[80px] max-[420px] max-w-full">
              {/* Animação sincronizada para h1 e p */}
              <motion.div
                className="max-w-[600px] min-w-[460px] mb-[10px]"
                style={{ color: '#190046' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <img src={logo} alt="" className='' />

              </motion.div>

              <motion.div
                style={{ color: '#190046' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              >
                <div className='ml-[46px]'>
                  <a href="#" className='max-w-full'>
                    <button className='bg-yellow-500 rounded-[12px] w-[32%] h-[45px] font-bold '>Saiba Mais</button>
                  </a>
                  <a href="#Adulto" className=''>
                    <button className='bg-yellow-500 rounded-[12px] w-[32%] ml-[20px] h-[45px] font-bold'>Ver Produtos</button>
                  </a>
                </div>
              </motion.div>

              <motion.div
                style={{ color: '#190046' }}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <div className='flex ml-[32px] mt-[20px] gap-3'>
                  <a href="#" className="text-[#190046] hover:text-yellow-400 transition-colors ml-[15px]">
                    <FaWhatsapp size={35} />
                  </a>
                  <a href="#" className="text-[#190046] hover:text-yellow-400 transition-colors">
                    <FaInstagram size={35} />
                  </a>
                  <a href="#" className="text-[#190046] hover:text-yellow-400 transition-colors">
                    <FaFacebook size={35} />
                  </a>
                </div>

              </motion.div>
            </div>

            <Swiper
              className='w-[680px] mb-[50px] lg:h-[1000px] h-[300px]'
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
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                  >
                    <img src={shoe.image} alt={shoe.name} className="object-contain transform rotate-[-26deg] sm:h-[250px] xl:w-[580px] h-[300px] lg:h-[900px] lg:w-[480px] md:w-[380px] mb-[180px] mr-[10px]" />
                  </motion.div>

                </SwiperSlide>
              ))}

            </Swiper>

          </div>
        </section>

        <section id="Adulto" className="h-[90vh] bg-white relative overflow-hidden">
          <h2 className="text-3xl font-bold text-blue-900 text-center py-8">Adulto</h2>
          <div className="flex flex-col max-w-full pr-[10px] pl-[10px] h-[400px] ml-[20px]">
            <div className='mb-[20px] w-full flex justify-center'>
              <FormControl component="fieldset" className='flex justify-center'>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" className='gap-10'>
                  <FormControlLabel className='flex flex-col'
                    onChange={handleGener}
                    value="masculino"
                    control={<Radio icon={<Man style={{ fontSize: 50 }} />} checkedIcon={<Man style={{ fontSize: 50 }} />} />}
                    label="Masculino"
                    style={{ color: 'black' }}
                  />
                  <FormControlLabel className='flex flex-col'
                    onChange={handleGener}
                    value='feminino'
                    control={<Radio icon={<Woman style={{ fontSize: 50 }} />} checkedIcon={<Woman style={{ fontSize: 50 }} />} />}
                    label="Feminino"
                    style={{ color: 'black' }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className='w-[150px] ml-[250px] mb-[20px] flex justify-center'>

            </div>
            <motion.div

              style={{ color: '#190046' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className='w-[200px] mb-[30px]'>
                <FormControl fullWidth variant="outlined" className=''>
                  <InputLabel id="shoe-type-label">Tipo de Calçado</InputLabel>
                  <Select
                    labelId="shoe-type-label"
                    id="shoe-type"
                    value={shoeType}
                    onChange={handleType}
                    label="Tipo de Calçado"
                  >
                    <MenuItem value="tenis">Tênis</MenuItem>
                    <MenuItem value="chuteira">Chuteira</MenuItem>
                    <MenuItem value="sapatilha">Sapatilha</MenuItem>
                    <MenuItem value="sandalia">Sandália</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <ImgMediaCard genero={genero} shoeType={shoeType}/>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
