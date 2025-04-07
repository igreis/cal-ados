import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

export const NovidadeSections = () => {

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
                    "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/489042205_1259777292815495_9181603549409022773_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGAaw_D9mOclQCmNye_Uh-DIsGbP296Fj0iwZs_b3oWPckVuD_2WdsG2ebSWocnSRSYLcr6WiVcMgPWTj5PnxVj&_nc_ohc=T93dY7todbEQ7kNvwF-p40r&_nc_oc=AdlcG1uVEPuTyTjwyYId8-GHth7TeiPLEbwNB_AC66EuJP8KorukMDoPVvgaTFTMOsipN7woBeXMmCPWbky4r3uH&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=Kx_b6Im1bLoElL1PlfNdcA&oh=00_AfEPZeLg7fkPyHzm4WIZr24p1dWRJpvi8ggd58Or77c2DA&oe=67F8CB69",
                   "https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/489338853_1259777596148798_2678055569244560487_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGwya_uf6HUmjE5DhQ9CAHhoAAEeVpVybygAAR5WlXJvMdBDhVEjRwlVF7bKtBfQ3VctjRI5_0aIzxbPIC_eL6t&_nc_ohc=o4HJGAWBgtYQ7kNvwEACJYG&_nc_oc=AdnLV52-85kI7tR8h0pXa0OU9ZtosmaLXSdOW0Okvmky4uiEW_mrUxDnr1WqALHafKmqBhHsyT3cKS-C5pOjoud2&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=1-NPlTuL1HRNz_fgSsLH5Q&oh=00_AfH6tchGnNdVsOaGebo2MsrKfz9plTPWJEzfMMhjmINPRw&oe=67F8C865",
                    "https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/488402926_1259777242815500_3478416824594695957_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3KFpo9jARKhJH1tBXSF3USCIyGsFcNudIIjIawVw25_CMQvBJ8ZZfIDnd2WpZ46Gq8ViT7_AKFe5YPneHV6HL&_nc_ohc=Ady0rrnmOWYQ7kNvwHgidGx&_nc_oc=AdmtDT9MDWlUkvKmv0O3eXPpfqfn-h9BSOOPeiyOZVB2n9j4_I4EOnCZZ0ZMvLVfs9P9h_ZsEW8LQ18kPffbwWUq&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=Q7BqtlpYmlMR4iZBUGjZ9g&oh=00_AfHcvP5gR196MlN1j-ExNjasBEafC0PWRDEDzLE5ERZsdQ&oe=67F8F86B"
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
