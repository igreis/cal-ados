'use client'

import { Header } from '../components/header/header'
import { Adulto2 } from '../components/adulto/adulto2'
import { Infantil2 } from '../components/infantil/infantil2'
import Novidades from '../components/novidades/novidades'
import { Categorias } from '../components/categorias/categorias'
import Footer from '../components/footer/footer';
import Slider from '../components/slider/slider';

export default function LandingPage() {
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
