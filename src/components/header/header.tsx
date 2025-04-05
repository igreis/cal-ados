import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Newspaper, ShoppingBag, User, Baby, Info, Menu, X } from "lucide-react"
import logo from '../../assets/logo.png';

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Início", icon: Home, href: "#" },
    { name: "Variedades", icon: Newspaper, href: "#variedades" },
    { name: "Novidades", icon: ShoppingBag, href: "#novidades" },
    { name: "Adulto", icon: User, href: "#adulto" },
    { name: "Infantil", icon: Baby, href: "#infantil" },
    { name: "Saiba Mais", icon: Info, href: "#saibaMais" },
  ]
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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
    <header className=" flex items-center justify-between fixed top-0 left-0 right-0 z-50 px-6 lg:px-20 h-20 bg-white shadow-md border-b border-gray-200">
      <a className="flex items-center" href="#">
        <img src={logo} alt="Calçados Logo" className="h-14" />
      </a>

      {/* Espaçamento dinâmico entre logo e navegação */}
      <div className="flex-1"></div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center gap-3 lg:gap-6 ml-auto">
        {menuItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 font-medium text-xs lg:text-sm flex flex-col lg:flex-row items-center gap-1 lg:gap-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon className="w-5 h-5 text-blue-500" />
            <span className="text-center">{item.name}</span>
          </motion.a>
        ))}
      </nav>

      {/* Botão do menu móvel */}
      <button
        onClick={toggleMenu}
        className="ml-auto md:hidden text-gray-700 focus:outline-none"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed top-20 left-0 right-0 bg-white shadow-md rounded-b-lg md:hidden overflow-hidden z-50 max-h-[calc(100vh-5rem)] overflow-y-auto"
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
                <item.icon className="mr-3 text-blue-500 h-5 w-5" />
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

