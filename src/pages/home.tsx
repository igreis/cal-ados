'use client'

import { Header } from '../components/header/header'
import { Adulto2 } from '../components/adulto/adulto2'
import { Infantil2 } from '../components/infantil/infantil2'
import Novidades from '../components/novidades/novidades'
import { Categorias } from '../components/categorias/categorias'
import Footer from '../components/footer/footer';
import Slider from '../components/slider/slider';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1300, // Duração da animação em milissegundos
      offset: window.innerWidth > 640 ? 180 : 550, // 200px acima no sm e 550px antes
      once: true, // Se `true`, a animação ocorre apenas uma vez
    });
  }, []);
  return (
    <div className="">
      <Header />
      <main className="flex-1 pt-16">
        <Slider />
        <Novidades />
        <Categorias />
        <Adulto2 />
        <Infantil2 />
        <Footer />
      </main>
    </div>
  )
}
