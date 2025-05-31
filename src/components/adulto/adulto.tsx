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
import sandaliaCubanaDakota from '../../assets/img/adultoFeminino/sandaliaCubana/sandaliaCubanaDakota.jpeg'
import sandaliaCubanaMoleca from '../../assets/img/adultoFeminino/sandaliaCubana/sandaliaCubanaMoleca.jpeg'

//sapatilha feminina
import sapatilhaMoleca from '../../assets/img/adultoFeminino/sapatilha/sapatilhaMol.jpeg'
import sapatilhaVizzano from '../../assets/img/adultoFeminino/sapatilha/sapatilhaViz.jpeg'
import sapatilhaSantinelli from '../../assets/img/adultoFeminino/sapatilha/sapatilhaSant.jpeg'
import sapatilha from '../../assets/img/adultoFeminino/sapatilha/sapatilha.jpeg'
import sapatilha2 from '../../assets/img/adultoFeminino/sapatilha/sapatilha2.jpeg'

//sapato feminino
import sapatoFeminino from '../../assets/img/adultoFeminino/sapato/sapatoFeminino.jpeg'
import sapatoVizanno from '../../assets/img/adultoFeminino/sapato/sapatoVizanno.jpeg'
import sapatoBeiraRio from '../../assets/img/adultoFeminino/sapato/sapatoBeiraRio.jpeg'
import sapatoMariota from '../../assets/img/adultoFeminino/sapato/sapatoMariota.jpeg'
import sapatoSantinelli from '../../assets/img/adultoFeminino/sapato/sapatoSantinelli.jpeg'

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

//chuteira mascrulina
import chuteiraNike from '../../assets/img/adultoMasculino/chuteira/chuteiraNike.jpeg'
import chuteiraAdidas from '../../assets/img/adultoMasculino/chuteira/chuteiraAdidas.jpeg'
import chuteiraPenalty from '../../assets/img/adultoMasculino/chuteira/chuteiraPenalty.jpeg'
import chuteiraToper from '../../assets/img/adultoMasculino/chuteira/chuteiraToper.jpeg'
import chuteiraUmbro from '../../assets/img/adultoMasculino/chuteira/chuteiraUmbro.jpeg'


interface Data {
  marca: string,
  imageUrl: string,
  preço: number,
}

const data: Record<string, Record<string, Data[]>> = {
  masculino: {
    tenisEsportivo: [
      { marca: 'Tênis Nike Revolution 7', imageUrl: tenisNike, preço: 559.90 },
      { marca: 'Tênis Olympikus', imageUrl: tenisOlimpykus, preço: 169.90 },
      { marca: 'Tênis Mizuno Wave Frontier 15', imageUrl: tenisMizuno, preço: 899.90 },
      { marca: 'Tênis Under Armour Great', imageUrl: tenisUnder, preço: 369.90 },
      { marca: 'Tênis Adidas Duramo SL', imageUrl: tenisAdidasMasc, preço: 559.90 },
    ],
    tenisCasual: [
      { marca: 'Tênis New Acess', imageUrl: tenisCasualMasc, preço: 169.90 },
      { marca: 'Tênis Olympikus Urbano', imageUrl: tenisOlympCasual, preço: 289.90 },
      { marca: 'Tênis Qix Comabate Suede', imageUrl: tenisQixCasual, preço: 449.90 },
      { marca: 'Tênis Redikal', imageUrl: tenisRedikal, preço: 219.90 },
      { marca: 'Tênis Ark', imageUrl: tenisArk, preço: 149.90 },
    ],
    sapato: [
      { marca: 'Sapato Manutt Americano', imageUrl: sapatoMasc, preço: 269.90 },
      { marca: 'Sapato Jacometti', imageUrl: sapatoMasc2, preço: 549.90 },
      { marca: 'Sapato Rafarillo', imageUrl: sapatoRafarillo, preço: 299.90 },
      { marca: 'Sapato Ferracini Monterrey', imageUrl: sapatoFerraccini, preço: 359.90 },
      { marca: 'Sapato Bertelli', imageUrl: sapatoBerteli, preço: 159.90 },
    ],
    sapatenis: [
      { marca: 'Sapatenis Ferricelli', imageUrl: sapatenisMasc, preço: 299.90 },
      { marca: 'Sapatenis Ferracini', imageUrl: sapatenisFerraciniMasc, preço: 379.90 },
      { marca: 'Sapatenis Pegada', imageUrl: sapatenisPegadaMasc, preço: 299.90 },
      { marca: 'Sapatenis PGD', imageUrl: sapatenisPgdMasc, preço: 239.90 },
      { marca: 'Sapatenis Fire Wave', imageUrl: sapatenisFireWaveMasc, preço: 189.90 },
    ],
    coturno: [
      { marca: 'Coturno ', imageUrl: CoturnoMasc, preço: 289.90 },
      { marca: 'Coturno ', imageUrl: Coturno2Masc, preço: 279.90 },
      { marca: 'Coturno Caterpillar', imageUrl: CoturnoCatMasc, preço: 99.90 },
      { marca: 'Coturno Caterpillar', imageUrl: CoturnoCaterpillarMasc, preço: 229.90 },
      { marca: 'Coturno Macboot', imageUrl: CoturnoMacbootMasc, preço: 449.90 },
    ],
    chuteira: [
      { marca: 'Chuteira Nike Vapor 15 Society', imageUrl: chuteiraNike, preço: 599.90 },
      { marca: 'Chuteira Adidas Predator Campo', imageUrl: chuteiraAdidas, preço: 599.90 },
      { marca: 'Chuteira Penalty Max 1000 Futsal', imageUrl: chuteiraPenalty, preço: 449.90 },
      { marca: 'Chuteira Topper Maestro Campo', imageUrl: chuteiraToper, preço: 349.90 },
      { marca: 'Chuteira Umbro Class Society', imageUrl: chuteiraUmbro, preço: 169.90 },
    ],
  },
  feminino: {
    tenisEsportivo: [
      { marca: 'Tênis Mizuno Glow 2', imageUrl: tenisMizunoFeminino, preço: 459.90 },
      { marca: 'Tênis Nike Downshifter 11', imageUrl: tenisNikeFem, preço: 559.90 },
      { marca: 'Tênis Olympikus NYX', imageUrl: tenisOlympikusFeminino2, preço: 239.90 },
      { marca: 'Tênis Under Armour Great', imageUrl: tenisUnderFem, preço: 369.90 },
      { marca: 'Tênis Fila', imageUrl: tenisFilaFeminino, preço: 169.90 },
    ],
    tenisCasual: [
      { marca: 'Tênis Vizzano', imageUrl: tenisCasual, preço: 139.90 },
      { marca: 'Tênis Via Marte', imageUrl: tenisCasual2, preço: 229.90 },
      { marca: 'Tênis Via Marte', imageUrl: tenisCasual3, preço: 329.90 },
      { marca: 'Tênis Ramarim', imageUrl: tenisRamarin, preço: 269.90 },
      { marca: 'Tênis Vert', imageUrl: tenisVest, preço: 199.90 },

    ],
    papet: [
      { marca: 'Papet Moleca', imageUrl: papetMoleca, preço: 149.90 },
      { marca: 'Papet Vizano', imageUrl: papetVizano, preço: 179.90 },
      { marca: 'Papet Beira Rio', imageUrl: papetBeiraRio, preço: 129.90 },
      { marca: 'Papet Mississipi', imageUrl: papetMississipi, preço: 139.90 },
      { marca: 'Papet Petite Jolie', imageUrl: papet, preço: 189.90 },
    ],
    rasteirinha: [
      { marca: 'Rasteirinha Beira Rio', imageUrl: rasteirinhaBeiraRio, preço: 129.90 },
      { marca: 'Rasteirinha Cecilia Lima', imageUrl: rasteirinhaCecilia, preço: 179.90 },
      { marca: 'Rasteirinha Mississipi', imageUrl: rasteirinhaMississipi, preço: 119.90 },
      { marca: 'Rasteirinha Ramarim', imageUrl: rasteirinhaRamarim, preço: 169.90 },
      { marca: 'Rasteirinha Moleca', imageUrl: rasteirinhaMoleca, preço: 129.90 },
    ],
    sandalia: [
      { marca: 'Sandália Moleca', imageUrl: sandaliaMoleca, preço: 149.90 },
      { marca: 'Sandália Mississipi', imageUrl: sandaliaMississipi, preço: 129.90 },
      { marca: 'Sandália Ramarim', imageUrl: sandaliaRamarim, preço: 199.90 },
      { marca: 'Sandália Princes', imageUrl: sandaliaPrinces, preço: 139.90 },
      { marca: 'Sandália Moleca', imageUrl: sandaliaAMoleca, preço: 139.90 },
    ],
    sandaliaCubana: [
      { marca: 'Sandália Vizzano', imageUrl: sandaliaCubanaVizzano, preço: 199.90 },
      { marca: 'Sandália ConfortFlex', imageUrl: sandaliaCubanaConfort, preço: 199.90 },
      { marca: 'Sandália Mississipi', imageUrl: sandaliaCubanaMississipi, preço: 179.90 },
      { marca: 'Sandália Dakota', imageUrl: sandaliaCubanaDakota, preço: 189.90 },
      { marca: 'Sandália Moleca', imageUrl: sandaliaCubanaMoleca, preço: 129.90 },
    ],
    sapatilha: [
      { marca: 'Sapatilha Moleca', imageUrl: sapatilhaMoleca, preço: 109.90 },
      { marca: 'Sapatilha Vizzano', imageUrl: sapatilhaVizzano, preço: 139.90 },
      { marca: 'Sapatilha Santinelli', imageUrl: sapatilhaSantinelli, preço: 109.90 },
      { marca: 'Sapatilha Sua Cia', imageUrl: sapatilha, preço: 99.90 },
      { marca: 'Sapatilha Moleca', imageUrl: sapatilha2, preço: 89.90 },
    ],
    sapato: [
      { marca: 'Sapato Beira Rio', imageUrl: sapatoFeminino, preço: 169.90 },
      { marca: 'Sapato Vizano', imageUrl: sapatoVizanno, preço: 149.90 },
      { marca: 'Sapato Beira Rio', imageUrl: sapatoBeiraRio, preço: 109.90 },
      { marca: 'Sapato Mariotta', imageUrl: sapatoMariota, preço: 159.90 },
      { marca: 'Sapato Santinelli', imageUrl: sapatoSantinelli, preço: 169.90 },
    ],
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
          <div >
            <Card2 data={filteredData.sapatilha || null} onClickModal={openModal} titulo='Sapatilha' />
          </div>
          <div >
            <Card2 data={filteredData.chuteira || null} onClickModal={openModal} titulo='chuteira' />
          </div>
      </div>
      {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  )
}
