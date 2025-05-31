import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

import CardNovidades from "../../ui/CardNovidades";
import bolsas from "../../assets/img/variedades/bolsas.jpg";
import perfumes from "../../assets/img/variedades/perfumes.jpg";
import biquinis from "../../assets/img/variedades/biiquiinis.jpg";
import relogios from "../../assets/img/variedades/relgoio.jpg";
import climatizadores from "../../assets/img/variedades/climatizadores.jpg";
import toalhas from "../../assets/img/variedades/toalhas.jpg";

const data = {
  novidades: [
    { marca: 'Bolsas', imageUrl: bolsas, preço: 169.90 },
    { marca: 'Perfumes', imageUrl: perfumes, preço: 149.90 },
    { marca: 'Biquinis', imageUrl: biquinis, preço: 149.90 },
    { marca: 'Relogios', imageUrl: relogios, preço: 200.90 },
    { marca: 'Climatizadores', imageUrl: climatizadores, preço: 149.90 },
    { marca: 'Toalhas/Tapetes/Roupas de cama', imageUrl: toalhas, preço: 149.90 },
    
  ]
};

export default function VariedadesCarrossel() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="variedades" className="bg-white pt-[25px] sm:pt-[50px]">
      <motion.div
        className="flex items-center justify-center mb-[20px] md:mb-[50px]"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className="sm:w-[34%] w-[26%] border-b border-black mr-2"></div>
        <h1 className="text-3xl text-black">Variedades</h1>
        <div className="sm:w-[34%] w-[26%] border-b border-black ml-2"></div>
      </motion.div>

      <Swiper
        className="md:max-w-[75%] sm:max-w-[85%] max-w-[95%] w-full"
        breakpoints={{
          100: {
            slidesPerView: 2,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          768: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay]}
      >
        {data.novidades.map((produto, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <motion.div
              className="w-full max-w-[800px]"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <CardNovidades data={[produto]} />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
