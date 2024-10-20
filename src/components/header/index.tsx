import logo from '../../assets/image-removebg-preview.png';
import backgroundImage from '../../assets/bgcal.jpg'; // Adicione a imagem de fundo aqui
import { FaWhatsapp } from 'react-icons/fa'; // Para usar o ícone do WhatsApp

export const HeaderWithBackground = () => {
  return (
    <header
      className="relative h-[800px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 h-[100vh]"></div> {/* Camada de opacidade sobre a imagem */}
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <a className="flex items-center justify-center" href="#">
          <img
            src={logo}
            alt="Calçados Logo"
            className="h-20 lg:h-24"
          />
          <span className="ml-2 text-4xl lg:text-5xl font-bold text-white">Calçados</span>
        </a>

        {/* Navegação */}
        <nav className="mt-6 flex gap-4 sm:gap-6">
          <a className="text-lg font-medium hover:underline underline-offset-4 text-[white]" href="#home">
            Home
          </a>
          <a className="text-lg font-medium hover:underline underline-offset-4 text-[white]" href="#novidades">
            Novidades
          </a>
          <a className="text-lg font-medium hover:underline underline-offset-4 text-[white]" href="#adulto">
            Adulto
          </a>
          <a className="text-lg font-medium hover:underline underline-offset-4 text-[white]" href="#infantil">
            Infantil
          </a>
        </nav>

        {/* Botão do WhatsApp */}
        <div className="mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_DE_WHATSAPP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600"
          >
            <FaWhatsapp className="text-xl" />
            <span>Contato WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
