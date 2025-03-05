import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { FaBars, FaTimes, FaHome, FaShoppingBag, FaChild, FaNewspaper, FaPhoneAlt } from 'react-icons/fa';

import logo from '../../assets/image-removebg-preview.png';

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Início', icon: FaHome, href: '#' },
    { name: 'Novidades', icon: FaNewspaper, href: '#novidades' },
    { name: 'Adulto', icon: FaShoppingBag, href: '#adulto' },
    { name: 'Infantil', icon: FaChild, href: '#infantil' },
    { name: 'Saiba Mais', icon: FaPhoneAlt, href: '#saibaMais' },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className=" flex items-center justify-between fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 h-20 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
      <a className="flex items-center" href="#">
        <img src={logo} alt="Calçados Logo" className="h-14" />
      </a>

      {/* Espaçamento dinâmico entre logo e navegação */}
      <div className="flex-1"></div>

      {/* Navegação Desktop */}
      <nav className="hidden sm:flex gap-6 md:gap-10">
        {menuItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium text-sm flex items-center gap-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-7 h-7 text-blue-500" />
            {item.name}
          </motion.a>
        ))}
      </nav>

      {/* Botão do menu móvel */}
      <button
        onClick={toggleMenu}
        className="ml-auto sm:hidden text-gray-700 focus:outline-none"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Menu móvel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white shadow-md rounded-b-lg sm:hidden overflow-hidden"
          >
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center px-6 py-4 text-gray-800 hover:bg-gray-100 transition-all"
                onClick={toggleMenu}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="mr-3 text-blue-500" size={20} />
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
