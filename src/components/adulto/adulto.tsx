import tenis from '../../assets/mizu.jpg'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Card2 from '../../ui/card2';
import papet from '../../assets/papet.jpeg';
import Modal from '../../ui/modal';

interface Data {
  marca: string,
  imageUrl: string,
  preço: number,
}

const data: Record<string, Record<string, Data[]>> = {
  masculino: {
    tenis: [
      { marca: 'nike', imageUrl: tenis, preço: 169.90 },
      { marca: 'nike', imageUrl: tenis, preço: 169.90 },
      { marca: 'nike', imageUrl: tenis, preço: 169.90 },
      { marca: 'nike', imageUrl: tenis, preço: 169.90 },
      { marca: 'nike', imageUrl: tenis, preço: 169.90 },
    ],
    sapato: [
      { marca: 'sapato', imageUrl: papet, preço: 169.90 },
      { marca: 'sapato', imageUrl: papet, preço: 169.90 },
      { marca: 'sapato', imageUrl: papet, preço: 169.90 },
      { marca: 'sapato', imageUrl: papet, preço: 169.90 },
      { marca: 'sapato', imageUrl: papet, preço: 169.90 },
    ]
  },
  feminino: {
    sapatilha: [
      { marca: 'modare', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true', preço: 169.90 },
      { marca: 'modare', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true', preço: 169.90 },
      { marca: 'modare', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true', preço: 169.90 },
      { marca: 'modare', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true', preço: 169.90 },
      { marca: 'modare', imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true', preço: 169.90 },
    ],
    tenis: [
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
    ]
  },
};

export const Adulto = () => {

  const [genero, setGenero] = useState<string>('masculino')
  const [shoeType, setShoeType] = useState<string>('tenis');
  const [selectedProduct, setSelectedProduct] = useState<Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (produto: Data) => {
    setSelectedProduct(produto);
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false)
  };

  useEffect(() => {
    if (!(data[genero]?.[shoeType])) {
      setGenero(genero === 'masculino' ? "feminino" : "masculino")
    }
  }, [shoeType]);

  useEffect(() => {
    if (!(data[genero]?.[shoeType])) {
      setShoeType("tenis")
    }
  }, [genero]);

  const filteredData = data[genero] || [];

  return (
    <section id="adulto" className=" bg-white py-8 relative mt-[10px]" >
      <div className="relative w-fit mx-auto text-center mb-8 mt-[20px]" data-aos="fade-up">
        <h2 className="text-3xl text-black font-bold">ADULTO</h2>
        <div className="absolute left-[10%] bottom-0 w-[80%] h-[1px] bg-black" data-aos="zoom-in"></div>
      </div>


      <style>
        {`
          @keyframes expand {
            from {
              width: 0;
              left: 50%;
            }
            to {
              width: 80%;
              left: 8%;
            }
          }
        `}
      </style>

      {/* Botões de seleção de gênero */}
      <div className="flex flex-col items-center space-y-2 mb-8" data-aos="fade-up">
        <label htmlFor="gender-group" className="text-sm font-medium text-gray-700">
          Selecione o gênero:
        </label>
        <div id="gender-group" className="inline-flex rounded-md shadow-sm" role="group">
          <button
            className={`px-4 py-2 font-semibold rounded-l-md ${genero === "masculino" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setGenero("masculino")}
          >
            Masculino
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r-md ${genero === "feminino" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setGenero("feminino")}
          >
            Feminino
          </button>
        </div>
      </div>

      <div className="md:max-w-[80%] sm:max-w-[90%] max-w-[95%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div data-aos="fade-right">
            <Card2 data={filteredData.tenis} onClickModal={openModal} titulo='Tênis' />
          </div>
          <div data-aos="fade-right">
            <Card2 data={filteredData.sapato || null} onClickModal={openModal} titulo='Sapato' />
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  )
}
