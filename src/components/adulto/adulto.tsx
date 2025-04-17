import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Card2 from '../../ui/card2';
import papet from '../../assets/papet.jpeg';
import Modal from '../../ui/modal';

//Esportivo feminino
import tenisOlympikusFeminino from '../../assets/img/adultoFeminino/tenisEsportivo/TenisOlympikusFeminino.jpeg'
import tenisOlympikusFeminino2 from '../../assets/img/adultoFeminino/tenisEsportivo/TenisOlympikusFeminino2.jpeg'
import tenisMizunoFeminino from '../../assets/img/adultoFeminino/tenisEsportivo/TenisMizunoFeminino.jpeg'
import tenisUnderFeminino from '../../assets/img/adultoFeminino/tenisEsportivo/TenisUnderFeminino.jpeg'
import tenisFilaFeminino from '../../assets/img/adultoFeminino/tenisEsportivo/TenisFilaFeminino.jpeg'


//Casual feminino
import tenisCasual from '../../assets/img/adultoFeminino/tenisCasual/TenisCasualFeminino.jpeg'
import tenisCasual2 from '../../assets/img/adultoFeminino/tenisCasual/TenisCasualFeminino2.jpeg'
import tenisCasual3 from '../../assets/img/adultoFeminino/tenisCasual/TenisCasualFeminino3.jpeg'
import tenisRamarin from '../../assets/img/adultoFeminino/tenisCasual/TenisRamarimCasual.jpeg'


//Esportivo Masculino
import tenisAdidas from '../../assets/img/adultoMasculino/tenisEsportivo/TenisAdidasMasculino.jpeg'
import tenisOlimpykus from '../../assets/img/adultoMasculino/tenisEsportivo/TenisOlympikusMasculino.jpeg'
import tenisUnder from '../../assets/img/adultoMasculino/tenisEsportivo/TenisUnderMasculino.jpeg'
import tenisNike from '../../assets/img/adultoMasculino/tenisEsportivo/TenisNikeMasculino.jpeg'
import tenisMizuno from '../../assets/img/adultoMasculino/tenisEsportivo/TenisMizuno.jpeg'


//Casual Masculino
import tenisCasualMasc from '../../assets/img/adultoMasculino/tenisCasual/TenisCasualMasc.jpeg'
import tenisOlympCasual from '../../assets/img/adultoMasculino/tenisCasual/TenisOlympCasual.jpeg'
import tenisQixCasual from '../../assets/img/adultoMasculino/tenisCasual/TenisQixCasual.jpeg'
import tenisCasualMasc2 from '../../assets/img/adultoMasculino/tenisCasual/TenisCasualMasc2.jpeg'


interface Data {
  marca: string,
  imageUrl: string,
  preço: number,
}

const data: Record<string, Record<string, Data[]>> = {
  masculino: {
    tenisEsportivo: [
      { marca: 'Tênis Nike', imageUrl: tenisNike, preço: 169.90 },
      { marca: 'Tênis Olympikus', imageUrl: tenisOlimpykus, preço: 169.90 },
      { marca: 'Tênis Adidas', imageUrl: tenisMizuno, preço: 169.90 },
      { marca: 'Tênis Under Armour', imageUrl: tenisUnder, preço: 169.90 },
      { marca: 'Tênis Fila', imageUrl: tenisAdidas, preço: 169.90 },
    ],
    tenisCasual: [
      { marca: 'sapato', imageUrl: tenisCasualMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisOlympCasual, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisQixCasual, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisCasualMasc2, preço: 169.90 },
      { marca: 'sapato', imageUrl: papet, preço: 169.90 },
    ]
  },
  feminino: {
    tenisEsportivo: [
      { marca: 'Tênis Mizuno', imageUrl: tenisMizunoFeminino, preço: 169.90 },
      { marca: 'Tênis Olympikus', imageUrl: tenisOlympikusFeminino, preço: 169.90 },
      { marca: 'Tênis Olympikus', imageUrl: tenisOlympikusFeminino2, preço: 169.90 },
      { marca: 'Tênis Under Armour', imageUrl: tenisUnderFeminino, preço: 169.90 },
      { marca: 'Tênis Fila', imageUrl: tenisFilaFeminino, preço: 169.90 },
    ],
    tenisCasual: [
      { marca: 'nike', imageUrl: tenisCasual, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisCasual2, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisCasual3, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisRamarin, preço: 169.90 },

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
    <section id="adulto" className=" bg-white py-4 relative mt-[10px]" >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }} // 'once' faz a animação rodar só 1 vez
      >
      <div className="relative w-fit mx-auto text-center mb-2 mt-[10px]" >
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
      <div className="flex flex-col items-center space-y-2 mb-10">
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

      </motion.div>
      <div className="md:max-w-[75%] sm:max-w-[85%] max-w-[95%] mx-auto">
        
          <div >
            <Card2 data={filteredData.tenisEsportivo} onClickModal={openModal} titulo='Tênis Esportivo' />
          </div>
          <div >
            <Card2 data={filteredData.tenisCasual || null} onClickModal={openModal} titulo='Tênis Casual' />
          </div>
          <div >
            <Card2 data={filteredData.sapatilha || null} onClickModal={openModal} titulo='Sapatilha' />
          </div>
      </div>
      {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  )
}
