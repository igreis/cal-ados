import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaHome, FaShoppingBag, FaChild, FaNewspaper, FaPhoneAlt } from 'react-icons/fa'
import logo from '../../assets/image-removebg-preview.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: 'Início', icon: FaHome, href: '#' },
    { name: 'Novidades', icon: FaNewspaper, href: '#novidades' },
    { name: 'Adulto', icon: FaShoppingBag, href: '#adulto' },
    { name: 'Infantil', icon: FaChild, href: '#infantil' },
    { name: 'Saiba Mais', icon: FaPhoneAlt, href: '#saibaMais' },
  ]

  // Fechar o menu ao clicar fora dele
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-20 h-16 flex items-center bg-[#f4ff2b]">
      <a className="flex items-center justify-center" href="#">
        <img src={logo} alt="Calçados Logo" className="h-14" />
      </a>

      {/* Navegação para telas maiores */}
      <nav className="ml-auto hidden gap-4 sm:gap-6 sm:flex">
        {menuItems.map((item) => (
          <a key={item.name} className="text-dm font-medium hover:underline underline-offset-4 text-[black]" href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>

      {/* Botão para abrir/fechar menu móvel (aparece abaixo de sm) */}
      <button
        onClick={toggleMenu}
        className="ml-auto sm:hidden text-black focus:outline-none"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navegação móvel (aparece abaixo de sm) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: '500px' }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-blue-800 sm:hidden overflow-hidden"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-white hover:bg-blue-700 transition-colors duration-200"
                onClick={toggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="mr-3" size={20} />
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
