import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

//imagens
import opçao1 from '../../assets/img/opçao/opçao1.jpg'
import opçao2 from '../../assets/img/opçao/opçao2.jpg'
import opçao3 from '../../assets/img/opçao/opçao3.jpg'

export const OpçoesSection = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <section className="w-full py-12 flex justify-center lg:mt-[30px]" id='novidades'>
            <Swiper
                className="w-full flex justify-center items-center gap-8 md:max-w-[75%] sm:max-w-[90%] max-w-[95%] max-h-full"
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                spaceBetween={20}
                autoplay={{ delay: 2000 }}
                loop={true}
                modules={[Autoplay]}
            >
                {[
                    opçao1,
                    opçao2,
                    opçao3
                ].map((src, index) => (
                    <SwiperSlide key={index} className='flex justify-center'>
                        <motion.div
                            className="group relative flex justify-center items-center overflow-hidden"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <img
                                src={src}
                                alt={`Produto ${index + 1}`}
                                className='sm:min-h-[480px] min-h-[450px] transition-all duration-300 group-hover:brightness-75'
                            />
                            <button
                                className="absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                            >
                                COMPRAR
                            </button>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
