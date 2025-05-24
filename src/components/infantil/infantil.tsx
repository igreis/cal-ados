import { useState, useEffect } from 'react';
import Card2 from '../../ui/card2';
import Modal from '../../ui/modal';
import { motion } from 'framer-motion'

//tenis infantil
import tenisBotinhoInfantil from '../../assets/img/infantilMasculino/tenis/tenisBotinhoInfantil.jpg'
import tenisDokiInfantil from '../../assets/img/infantilMasculino/tenis/tenisDokiInfantil.jpg'
import tenisOlympikusInfantil2 from '../../assets/img/infantilMasculino/tenis/tenisOlympikusInfantil2.jpg'
import tenisOlympikusInfantil from '../../assets/img/infantilMasculino/tenis/tenisOlympikusInfantil.jpg'
import tenisMolekinhoInfantil from '../../assets/img/infantilMasculino/tenis/tenisMolekinhoInfantil.jpg'

//sandalia infantil
import sandaliaGrendeneInfantil from '../../assets/img/infantilMasculino/sandalia/sandaliaGrendeneInfantil.jpg'
import sandaliaMolequinhoInfantil from '../../assets/img/infantilMasculino/sandalia/sandaliaMolequinhoInfantil.jpg'
import sandaliaPgdInfantil from '../../assets/img/infantilMasculino/sandalia/sandaliaPgdInfantil.jpg'
import crocsBoaOndaInfantil from '../../assets/img/infantilMasculino/sandalia/crocsBoaOndaInfantil.jpg'
import crocsWordColorsInfantil from '../../assets/img/infantilMasculino/sandalia/crocsWordColorsInfatil.jpg'

//social infantil
import sapatoBertelliInfantil from '../../assets/img/infantilMasculino/social/sapatoBertelliInfantil.jpg'
import sapatoFearnothiInfantil from '../../assets/img/infantilMasculino/social/sapatoFearnothiInfantil.jpg'
import sapatoRedMaxInfantil from '../../assets/img/infantilMasculino/social/sapatoRedMaxInfantil.jpg'
import mocassimMolekinhoInfantil from '../../assets/img/infantilMasculino/social/mocassimMolekinhoInfantil.jpg'
import mocassimMolekinhoInfantil2 from '../../assets/img/infantilMasculino/social/mocassimMolekinhoInfantil2.jpg'

//all star
import allStar from '../../assets/img/infantilMasculino/allStart/allStartInfantil.jpg'
import allStar2 from '../../assets/img/infantilMasculino/allStart/allStartInfantil2.jpg'
import allStar3 from '../../assets/img/infantilMasculino/allStart/allStartInfantil3.jpg'
import allStar4 from '../../assets/img/infantilMasculino/allStart/allStartInfantil4.jpg'
import allStar5 from '../../assets/img/infantilMasculino/allStart/allStartInfantil5.jpg'

//sandalia infantil feminino
import sandaliaEmiliaKids from '../../assets/img/infantilFeminino/sandalia/sandaliaEmiliaKids.jpg'
import sandaliaGruguiInfantil from '../../assets/img/infantilFeminino/sandalia/sandaliaGruguiInfantil.jpg'
import sandaliaMolekinhaInfantil from '../../assets/img/infantilFeminino/sandalia/sandaliaMolekinhaInfantil.jpg'
import sandaliaDakotaInfantil from '../../assets/img/infantilFeminino/sandalia/sandaliaDakotaInfantil.jpg'
import sandaliaDedinhoNoPeInfantil from '../../assets/img/infantilFeminino/sandalia/sandaliaDedinhoNoPeInfantil.jpg'

//tamanco infantil feminino
import tamancoDakotaInfantil from '../../assets/img/infantilFeminino/tamanco/tamancoDakotaInfantil.jpg'
import tamancoMolekinhaInfantil from '../../assets/img/infantilFeminino/tamanco/tamancoMolekinhaInfantil.jpg'
import tamancoMolekinhaInfantil2 from '../../assets/img/infantilFeminino/tamanco/tamancoMolekinhaInfantil2.jpg'
import tamancoMolekinhaInfantil3 from '../../assets/img/infantilFeminino/tamanco/tamancoMolekinhaInfantil3.jpg'
import tamancoMolekinhaInfantil4 from '../../assets/img/infantilFeminino/tamanco/tamancoMolekinhaInfantil4.jpg'

//mocassim infantil
import mocassimMolekinhaInfantil from '../../assets/img/infantilFeminino/mocassim/mocassimMolekinhaInfantil.jpg'
import mocassimMolekinhaInfantil2 from '../../assets/img/infantilFeminino/mocassim/mocassimMolekinhaInfantil2.jpg'
import mocassimMolekinhaInfantil3 from '../../assets/img/infantilFeminino/mocassim/mocassimMolekinhaInfantil3.jpg'
import mocassimMolekinhaInfantil4 from '../../assets/img/infantilFeminino/mocassim/mocassimMolekinhaInfantil4.jpg'

interface Data {
  marca: string;
  imageUrl: string;
  preço: number;
}

const data: Record<string, Record<string, Data[]>> = {
  masculino: {
    tenis: [
      { marca: 'Têns Botinho', imageUrl: tenisBotinhoInfantil, preço: 119.90 },
      { marca: 'Tênis Dok', imageUrl: tenisDokiInfantil, preço: 139.90 },
      { marca: 'Tênis Olympikus Stream', imageUrl: tenisOlympikusInfantil2, preço: 229.90 },
      { marca: 'Tênis Olympikus Versa', imageUrl: tenisOlympikusInfantil, preço: 319.90 },
      { marca: 'TênisMolekinho', imageUrl: tenisMolekinhoInfantil, preço: 139.90 },
    ],
    sandalia: [ 
      { marca: 'Sandália Grendene Kids', imageUrl: sandaliaGrendeneInfantil, preço: 99.90 },
      { marca: 'Sandália Molekinho', imageUrl: sandaliaMolequinhoInfantil, preço: 99.90 },
      { marca: 'Sandália PGD', imageUrl: sandaliaPgdInfantil, preço: 159.90 },
      { marca: 'Crocs Boa Onda', imageUrl: crocsBoaOndaInfantil, preço: 79.90 },
      { marca: 'Crocs Word Colors', imageUrl: crocsWordColorsInfantil, preço: 69.90 },
    ],
    social: [
      { marca: 'Sapato Bertelli', imageUrl: sapatoBertelliInfantil, preço: 129.00 },
      { marca: 'Sapato Fearnothi', imageUrl: sapatoFearnothiInfantil, preço: 89.90 },
      { marca: 'Sapato REDMAX', imageUrl: sapatoRedMaxInfantil, preço: 84.90 },
      { marca: 'Mocassim Molekinho', imageUrl: mocassimMolekinhoInfantil, preço: 89.90 },
      { marca: 'Mocassim Molekinho', imageUrl: mocassimMolekinhoInfantil2, preço: 89.90 },
    ],
    allStar: [
      { marca: 'All Star', imageUrl: allStar, preço: 229.90 },
      { marca: 'All Star', imageUrl: allStar2, preço: 269.90 },
      { marca: 'All Star', imageUrl: allStar3, preço: 229.90 },
      { marca: 'All Star', imageUrl: allStar4, preço: 229.90 },
      { marca: 'All Star', imageUrl: allStar5, preço: 269.90 },
    ],
    },
  feminino: {
    sandalia: [
      { marca: 'Sandália Emilia Kids', imageUrl: sandaliaEmiliaKids, preço: 0.90 },
      { marca: 'Sandália Grugui', imageUrl: sandaliaGruguiInfantil, preço: 119.90 },
      { marca: 'Sandália Molekinha', imageUrl: sandaliaMolekinhaInfantil, preço: 0.90 },
      { marca: 'Sandália Dakota', imageUrl: sandaliaDakotaInfantil, preço: 119.90 },
      { marca: 'Sandália Dedinho No Pe', imageUrl: sandaliaDedinhoNoPeInfantil, preço: 109.90 },
    ],
    tamanco: [
      { marca: 'Tamanco Dakota', imageUrl: tamancoDakotaInfantil, preço: 139.90 },
      { marca: 'Tamanco Molekinha', imageUrl: tamancoMolekinhaInfantil, preço: 49.90 },
      { marca: 'Tamanco Molekinha', imageUrl: tamancoMolekinhaInfantil2, preço: 89.90 },
      { marca: 'Tamanco Molekinha', imageUrl: tamancoMolekinhaInfantil3, preço: 79.90 },
      { marca: 'Tamanco Molekinha', imageUrl: tamancoMolekinhaInfantil4, preço: 109.90 },
    ],
    mocassim: [
      { marca: 'Mocassim Molekinha', imageUrl: mocassimMolekinhaInfantil, preço: 139.90 },
      { marca: 'Mocassim Molekinha', imageUrl: mocassimMolekinhaInfantil2, preço: 149.90 },
      { marca: 'Mocassim Molekinha', imageUrl: mocassimMolekinhaInfantil3, preço: 149.90 },
      { marca: 'Mocassim Molekinha', imageUrl: mocassimMolekinhaInfantil4, preço: 139.90 },
    ]
  },
};

export const Infantil = () => {
  const [genero, setGenero] = useState<string>('masculino');
  const [shoeType, setShoeType] = useState<string>('tenis');
  const [selectedProduct, setSelectedProduct] = useState<Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (produto: Data) => {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!(data[genero]?.[shoeType])) {
      setGenero(genero === 'masculino' ? "feminino" : "masculino");
    }
  }, [shoeType]);

  useEffect(() => {
    if (!(data[genero]?.[shoeType])) {
      setShoeType("tenis");
    }
  }, [genero]);

  const filteredData = data[genero] || [];

  return (
    <section id="infantil" className="min-h-screen bg-white lg:py-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }} // 'once' faz a animação rodar só 1 vez
      >
      <div className="relative w-fit mx-auto text-center mb-2 mt-[20px]">
        <h2 className="text-3xl font-bold text-black">INFANTIL</h2>
        <div className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-black transition-all duration-500 ease-out animate-[expand_1s_ease-out_forwards]"></div>
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
          <div>
            <Card2 data={filteredData.tenis} onClickModal={openModal} titulo='tenis' />
          </div>
          <div>
            <Card2 data={filteredData.sandalia} onClickModal={openModal} titulo='sandalia' />
          </div>
          <div>
            <Card2 data={filteredData.social} onClickModal={openModal} titulo='social' />
          </div>
          <div>
            <Card2 data={filteredData.allStar} onClickModal={openModal} titulo='allStar' />
          </div>
          <div>
            <Card2 data={filteredData.tamanco} onClickModal={openModal} titulo='tamanco' />
          </div>
          <div>
            <Card2 data={filteredData.mocassim} onClickModal={openModal} titulo='mocassim' />
          </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
};
