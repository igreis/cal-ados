import React, { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const stores = [
  {
    name: "Loja 1",
    address: "Avenida Bahia, 500 - Araguari - MG, 38400-000",
    phone: "(34) 3242-6156",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.2106606632354!2d-48.27619708509823!3d-18.91972998720279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4450c10bbae3d%3A0x6c0a7a3c0d0c3b0!2sAv.%20Bahia%2C%20500%20-%20Brasil%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038400-000!5e0!3m2!1sen!2sbr!4v1635789876543!5m2!1sen!2sbr"
  },
  {
    name: "Loja 2",
    address: "Avenida Brasil, 1010 - Araguari - MG, 38411-145",
    phone: "(34) 3228-8888",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.716282774696!2d-48.283327385098674!3d-18.895429987207036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445653a9430f1%3A0x7eeea0d2e44c9c0!2sShopping%20Uberlandia!5e0!3m2!1sen!2sbr!4v1635790123456!5m2!1sen!2sbr"
  }
]

export default function Footer() {
  const [currentStore, setCurrentStore] = useState(0)

  const nextStore = () => {
    setCurrentStore((prev) => (prev + 1) % stores.length)
  }

  const prevStore = () => {
    setCurrentStore((prev) => (prev - 1 + stores.length) % stores.length)
  }

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Nossas Lojas</h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStore}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{stores[currentStore].name}</h3>
                  <div className="w-full h-96 mb-6"> {/* Aumentamos o tamanho do mapa */}
                    <iframe 
                      src={stores[currentStore].mapSrc}
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen={true} 
                      loading="lazy"
                      title={`Localização da ${stores[currentStore].name}`}
                    ></iframe>
                  </div>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                      <span>{stores[currentStore].address}</span>
                    </li>
                    <li className="flex items-center">
                      <FaPhone className="mr-2 text-yellow-400" />
                      <span>{stores[currentStore].phone}</span>
                    </li>
                  </ul>
                </motion.div>
              </AnimatePresence>
              <button 
                onClick={prevStore} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-800 p-3 rounded-full"
              >
                <FaChevronLeft />
              </button>
              <button 
                onClick={nextStore} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-800 p-3 rounded-full"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
            <ul className="space-y-5 text-lg">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-400" />
                <span>contato@calcados.com</span>
              </li>
            </ul>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Siga-nos</h3>
              <div className="flex space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                  <FaFacebook size={28} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                  <FaInstagram size={28} />
                </a>
                <a href="https://wa.me/553432426156" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                  <FaWhatsapp size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>&copy; 2024 Calçados. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
