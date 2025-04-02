import { Radio, RadioGroup, FormControlLabel, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Man, Woman } from '@mui/icons-material';
import { useState, ChangeEvent, useEffect } from 'react';
import { motion } from 'framer-motion'
import Card from '../../ui/card';
import papet from '../../assets/papet.jpeg'
import Modal from '../../ui/modal';

interface Data {
  marca: string,
  imageUrl: string,
  preço: number,
}

const data: Record<string, Record<string, Data[]>> = {
  masculino: {
    tenis: [
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      { marca: 'nike', imageUrl: papet, preço: 169.90 },
      
    ],
  },
  feminino: {
    sapatilha: [
      {
        marca: 'modare',
        imageUrl: 'https://mizunobr.vtexassets.com/arquivos/ids/237844-800-800?v=638367866833700000&width=800&height=800&aspect=true',
        preço: 169.90,
      },
    ],
  },
};


export const Infantil2 = () => {

    const [ shoeType, setShoeType ] =  useState<string>('tenis');
    const [genero, setGenero] = useState<string>('masculino')
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

    const handleGener = (event: ChangeEvent<HTMLInputElement>) => {
        setGenero(event.target.value)
      }
    
      const handleType = (event: SelectChangeEvent<string>) => {
        setShoeType(event.target.value)
      }

      useEffect(() => {
        if (!(data[genero]?.[shoeType])) {
          if (genero === 'masculino') setGenero("feminino")
          else setGenero("masculino")
        }
        
      }, [shoeType]);
    
      useEffect(() => {
        if (!(data[genero]?.[shoeType])) {
          setShoeType("tenis")
        }
        
      }, [genero]);

      const filteredData = data[genero]?.[shoeType] || [];

    return (
        <section id="infantil" className="py-[80px] min-h-screen bg-[#ecedf2] px-4 relative border">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">INFANTIL</h2>
        <div className="md:max-w-[80%] sm:max-w-[90%] max-w-[95%] mx-auto">
          <div className="mb-8">
            <FormControl component="fieldset" className="w-full">
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
                className="flex justify-center gap-8"
                value={genero}
                onChange={handleGener}
              >
                <FormControlLabel
                  value="masculino"
                  control={<Radio icon={<Man style={{ fontSize: 40 }} />} checkedIcon={<Man style={{ fontSize: 40, color: '#3182CE' }} />} />}
                  label="Masculino"
                  style={{ color: 'black' }}
                  className="flex flex-col items-center"
                />
                <FormControlLabel
                  value="feminino"
                  control={<Radio icon={<Woman style={{ fontSize: 40 }} />} checkedIcon={<Woman style={{ fontSize: 40, color: '#3182CE' }} />} />}
                  label="Feminino"
                  style={{ color: 'black' }}
                  className="flex flex-col items-center"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="mb-8">
            <FormControl fullWidth variant="outlined">
              <InputLabel id="shoe-type-label">Tipo de Calçado</InputLabel>
              <Select
                labelId="shoe-type-label"
                id="shoe-type"
                value={shoeType}
                onChange={handleType}
                label="Tipo de Calçado"
              >
                <MenuItem value="tenis">Tênis</MenuItem>
                <MenuItem value="chuteira">Chuteira</MenuItem>
                <MenuItem value="sapatilha">Sapatilha</MenuItem>
                <MenuItem value="sandalia">Sandália</MenuItem>
              </Select>
            </FormControl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Card data={filteredData} onClickModal={openModal}/>
          </motion.div>
        </div>
        {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
      </section>
    )
}