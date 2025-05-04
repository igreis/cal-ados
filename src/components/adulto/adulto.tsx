import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import Card2 from '../../ui/card2';
import Modal from '../../ui/modal';

//Esportivo feminino
import tenisOlympikusFeminino2 from '../../assets/img/adultoFeminino/tenisEsportivo/TenisOlympikusFeminino2.jpeg'
import tenisMizunoFeminino from '../../assets/img/adultoFeminino/tenisEsportivo/TenisMizunoFeminino.jpeg'
import tenisFilaFeminino from '../../assets/img/adultoFeminino/tenisEsportivo/TenisFilaFeminino.jpeg'
import tenisNikeFem from '../../assets/img/adultoFeminino/tenisEsportivo/tenisNikeFem.jpg'
import tenisUnderFem from '../../assets/img/adultoFeminino/tenisEsportivo/tenisUnderFem.jpg'

//Casual feminino
import tenisCasual from '../../assets/img/adultoFeminino/tenisCasual/TenisCasualFeminino.jpeg'
import tenisCasual2 from '../../assets/img/adultoFeminino/tenisCasual/TenisCasualFeminino2.jpeg'
import tenisCasual3 from '../../assets/img/adultoFeminino/tenisCasual/TenisCasualFeminino3.jpeg'
import tenisRamarin from '../../assets/img/adultoFeminino/tenisCasual/TenisRamarimCasual.jpeg'
import tenisVest from '../../assets/img/adultoFeminino/tenisCasual/tenisVertsFem.jpeg'

//papet feminino
import papetMississipi from '../../assets/img/adultoFeminino/papet/papetMississipi.jpg'
import papetMoleca from '../../assets/img/adultoFeminino/papet/papetMoleca.jpg'
import papetVizano from '../../assets/img/adultoFeminino/papet/papetVizano.jpg'
import papetBeiraRio from '../../assets/img/adultoFeminino/papet/papetBeiraRio.jpg'
import papet from '../../assets/img/adultoFeminino/papet/papet2.jpg'

//rasteirinha feminina
import rasteirinhaMoleca from '../../assets/img/adultoFeminino/rasteirinha/rasteirinhaMoleca.jpg'
import rasteirinhaCecilia from '../../assets/img/adultoFeminino/rasteirinha/rasteirinhaCecilia.jpg'
import rasteirinhaBeiraRio from '../../assets/img/adultoFeminino/rasteirinha/rasteirinhaBeiraRio.jpg'
import rasteirinhaMississipi from '../../assets/img/adultoFeminino/rasteirinha/rasteirinhaMississipi.jpg'
import rasteirinhaRamarim from '../../assets/img/adultoFeminino/rasteirinha/rasteirinhaRamarim.jpg'

//sandalia feminina
import sandaliaMoleca from '../../assets/img/adultoFeminino/sandalia/sandaliaMoleca.jpg'
import sandaliaMississipi from '../../assets/img/adultoFeminino/sandalia/sandaliaMississipi.jpg'
import sandaliaRamarim from '../../assets/img/adultoFeminino/sandalia/sandaliaRamarim.jpg'
import sandaliaPrinces from '../../assets/img/adultoFeminino/sandalia/sandaliaPrinces.jpg'
import sandaliaAMoleca from '../../assets/img/adultoFeminino/sandalia/sandaliaAMoleca.jpg'

//sandaliaCubana
import sandaliaCubanaVizzano from '../../assets/img/adultoFeminino/sandaliaCubana/sandaliaCubanaViz.jpeg'
import sandaliaCubanaConfort from '../../assets/img/adultoFeminino/sandaliaCubana/sandaliaCubanaConfort.jpeg'
import sandaliaCubanaMississipi from '../../assets/img/adultoFeminino/sandaliaCubana/sandaliaCubanaMissi.jpeg'

//sapatilha feminina
import sapatilhaMoleca from '../../assets/img/adultoFeminino/sapatilha/sapatilhaMol.jpeg'
import sapatilhaVizzano from '../../assets/img/adultoFeminino/sapatilha/sapatilhaViz.jpeg'
import sapatilhaSantinelli from '../../assets/img/adultoFeminino/sapatilha/sapatilhaSant.jpeg'
import sapatilha from '../../assets/img/adultoFeminino/sapatilha/sapatilha.jpeg'
import sapatilha2 from '../../assets/img/adultoFeminino/sapatilha/sapatilha2.jpeg'

//Esportivo Masculino
import tenisOlimpykus from '../../assets/img/adultoMasculino/tenisEsportivo/TenisOlympikusMasculino.jpeg'
import tenisUnder from '../../assets/img/adultoMasculino/tenisEsportivo/TenisUnderMasculino.jpeg'
import tenisNike from '../../assets/img/adultoMasculino/tenisEsportivo/TenisNikeMasculino.jpeg'
import tenisMizuno from '../../assets/img/adultoMasculino/tenisEsportivo/tenisMizunoMasc.jpeg'
import tenisAdidasMasc from '../../assets/img/adultoMasculino/tenisEsportivo/tenisAdidasMasc.jpg'


//Casual Masculino
import tenisCasualMasc from '../../assets/img/adultoMasculino/tenisCasual/TenisCasualMasc.jpeg'
import tenisOlympCasual from '../../assets/img/adultoMasculino/tenisCasual/TenisOlympCasual.jpeg'
import tenisQixCasual from '../../assets/img/adultoMasculino/tenisCasual/TenisQixCasual.jpeg'
import tenisRedikal from '../../assets/img/adultoMasculino/tenisCasual/tenisRedikal.jpg'
import tenisArk from '../../assets/img/adultoMasculino/tenisCasual/tenisArkMasc.jpg'

//sapato masculino
import sapatoMasc from '../../assets/img/adultoMasculino/sapato/sapatoMasc.jpeg'
import sapatoMasc2 from '../../assets/img/adultoMasculino/sapato/sapatoMasc2.jpeg'
import sapatoRafarillo from '../../assets/img/adultoMasculino/sapato/sapatoRafarilloMasc.jpeg'
import sapatoFerraccini from '../../assets/img/adultoMasculino/sapato/sapatoFerracciniMasc.jpeg'
import sapatoBerteli from '../../assets/img/adultoMasculino/sapato/sapatoBertelliMasc.jpeg'

//sapatenis masculino
import sapatenisMasc from '../../assets/img/adultoMasculino/sapatenis/sapatenisMasc.jpeg'
import sapatenisFerraciniMasc from '../../assets/img/adultoMasculino/sapatenis/sapatenisFerraciniMasc.jpeg'
import sapatenisPegadaMasc from '../../assets/img/adultoMasculino/sapatenis/sapatenisPegadaMasc.jpeg'
import sapatenisPgdMasc from '../../assets/img/adultoMasculino/sapatenis/sapatenisPgdMasc.jpeg'
import sapatenisFireWaveMasc from '../../assets/img/adultoMasculino/sapatenis/sapatenisFireWaveMasc.jpeg'

//coturno masculino
import CoturnoMasc from '../../assets/img/adultoMasculino/coturno/CoturnoMasc.jpeg'
import Coturno2Masc from '../../assets/img/adultoMasculino/coturno/Coturno2Masc.jpeg'
import CoturnoCatMasc from '../../assets/img/adultoMasculino/coturno/CoturnoCatMasc.jpeg'
import CoturnoCaterpillarMasc from '../../assets/img/adultoMasculino/coturno/CoturnoCaterpillarMasc.jpeg'
import CoturnoMacbootMasc from '../../assets/img/adultoMasculino/coturno/CoturnoMacbootMasc.jpeg'


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
      { marca: 'Tênis Mizuno', imageUrl: tenisMizuno, preço: 169.90 },
      { marca: 'Tênis Under Armour', imageUrl: tenisUnder, preço: 169.90 },
      { marca: 'Tênis Adidas', imageUrl: tenisAdidasMasc, preço: 169.90 },
    ],
    tenisCasual: [
      { marca: 'sapato', imageUrl: tenisCasualMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisOlympCasual, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisQixCasual, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisRedikal, preço: 169.90 },
      { marca: 'sapato', imageUrl: tenisArk, preço: 169.90 },
    ],
    sapato: [
      { marca: 'sapato', imageUrl: sapatoMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatoMasc2, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatoRafarillo, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatoFerraccini, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatoBerteli, preço: 169.90 },
    ],
    sapatenis: [
      { marca: 'sapato', imageUrl: sapatenisMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatenisFerraciniMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatenisPegadaMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatenisPgdMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: sapatenisFireWaveMasc, preço: 169.90 },
    ],
    coturno: [
      { marca: 'sapato', imageUrl: CoturnoMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: Coturno2Masc, preço: 169.90 },
      { marca: 'sapato', imageUrl: CoturnoCatMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: CoturnoCaterpillarMasc, preço: 169.90 },
      { marca: 'sapato', imageUrl: CoturnoMacbootMasc, preço: 169.90 },
    ],
  },
  feminino: {
    tenisEsportivo: [
      { marca: 'Tênis Mizuno', imageUrl: tenisMizunoFeminino, preço: 169.90 },
      { marca: 'Tênis Nike', imageUrl: tenisNikeFem, preço: 169.90 },
      { marca: 'Tênis Olympikus', imageUrl: tenisOlympikusFeminino2, preço: 169.90 },
      { marca: 'Tênis Under Armour', imageUrl: tenisUnderFem, preço: 169.90 },
      { marca: 'Tênis Fila', imageUrl: tenisFilaFeminino, preço: 169.90 },
    ],
    tenisCasual: [
      { marca: 'nike', imageUrl: tenisCasual, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisCasual2, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisCasual3, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisRamarin, preço: 169.90 },
      { marca: 'nike', imageUrl: tenisVest, preço: 169.90 },

    ],
    papet: [
      { marca: 'Papet Moleca', imageUrl: papetMoleca, preço: 169.90 },
      { marca: 'Papet Vizano', imageUrl: papetVizano, preço: 169.90 },
      { marca: 'Papet Beira Rio', imageUrl: papetBeiraRio, preço: 169.90 },
      { marca: 'Papet Mississipi', imageUrl: papetMississipi, preço: 169.90 },
      { marca: 'Papet', imageUrl: papet, preço: 169.90 },
    ],
    rasteirinha: [
      { marca: 'Papet Moleca', imageUrl: rasteirinhaBeiraRio, preço: 169.90 },
      { marca: 'Papet Vizano', imageUrl: rasteirinhaCecilia, preço: 169.90 },
      { marca: 'Papet Beira Rio', imageUrl: rasteirinhaMississipi, preço: 169.90 },
      { marca: 'Papet Mississipi', imageUrl: rasteirinhaRamarim, preço: 169.90 },
      { marca: 'Papet', imageUrl: rasteirinhaMoleca, preço: 169.90 },
    ],
    sandalia: [
      { marca: 'Papet Moleca', imageUrl: sandaliaMoleca, preço: 169.90 },
      { marca: 'Papet Vizano', imageUrl: sandaliaMississipi, preço: 169.90 },
      { marca: 'Papet Beira Rio', imageUrl: sandaliaRamarim, preço: 169.90 },
      { marca: 'Papet Mississipi', imageUrl: sandaliaPrinces, preço: 169.90 },
      { marca: 'Papet', imageUrl: sandaliaAMoleca, preço: 169.90 },
    ],
    sandaliaCubana: [
      { marca: 'Papet Moleca', imageUrl: sandaliaCubanaVizzano, preço: 169.90 },
      { marca: 'Papet Vizano', imageUrl: sandaliaCubanaConfort, preço: 169.90 },
      { marca: 'Papet Beira Rio', imageUrl: sandaliaCubanaMississipi, preço: 169.90 },
    ],
    sapatilha: [
      { marca: 'Papet Moleca', imageUrl: sapatilhaMoleca, preço: 169.90 },
      { marca: 'Papet Vizano', imageUrl: sapatilhaVizzano, preço: 169.90 },
      { marca: 'Papet Beira Rio', imageUrl: sapatilhaSantinelli, preço: 169.90 },
      { marca: 'Papet Mississipi', imageUrl: sapatilha, preço: 169.90 },
      { marca: 'Papet', imageUrl: sapatilha2, preço: 169.90 },
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
            <Card2 data={filteredData.papet || null} onClickModal={openModal} titulo='Papet' />
          </div>
          <div >
            <Card2 data={filteredData.rasteirinha || null} onClickModal={openModal} titulo='Rasteirinha' />
          </div>
          <div >
            <Card2 data={filteredData.sandalia || null} onClickModal={openModal} titulo='Sandalia' />
          </div>
          <div >
            <Card2 data={filteredData.sapatilha || null} onClickModal={openModal} titulo='Sapatilha' />
          </div>
          <div >
            <Card2 data={filteredData.sandaliaCubana || null} onClickModal={openModal} titulo='Sandalia Cubana' />
          </div>
          <div >
            <Card2 data={filteredData.sapato || null} onClickModal={openModal} titulo='Sapato' />
          </div>
          <div >
            <Card2 data={filteredData.sapatenis || null} onClickModal={openModal} titulo='Sapatenis' />
          </div>
          <div >
            <Card2 data={filteredData.coturno || null} onClickModal={openModal} titulo='coturno' />
          </div>
      </div>
      {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  )
}
