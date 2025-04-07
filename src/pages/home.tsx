'use client'

import { Header } from '../components/header/header'
import { Adulto } from '../components/adulto/adulto'
import { Infantil } from '../components/infantil/infantil'
import Variedades from '../components/variedades/variedades'
import { Categorias } from '../components/categorias/categorias'
import Footer from '../components/footer/footer';
//import Slider from '../components/slider/slider'; 
import Slider2 from '../components/slider/slider2'
import {NovidadeSections} from '../components/novidades/novidades'
import {BrandsCarousel}  from '../components/marcas/marcas'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1300, // Duração da animação em milissegundos
      //offset: window.innerWidth > 640 ? 180 : 550, // 200px acima no sm e 550px antes
      once: true, // Se `true`, a animação ocorre apenas uma vez
    });
  }, []);
  return (
    <div className="">
      <Header />
      <main className="flex-1 pt-16">
        <Slider2 />
        <Variedades />
        <NovidadeSections />
        <Categorias />
        <BrandsCarousel />
        <Adulto />
        <Infantil />
        <Footer />
      </main>
    </div>
  )
}
