import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import novidadeCozinha from "../../assets/img/novidades/novidadeCozinha.jpg"

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
                   "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/499708670_1302423321884225_5323870597043957002_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG4yhQra9H2NOoqMmVHchg-f16h8VXww1h_XqHxVfDDWDfNXXDGGE-F8q9fJ8QVPxfcoIHpfvmOq_21TMPsMBP9&_nc_ohc=HhF0u3ev0YEQ7kNvwG3yFF2&_nc_oc=AdnIFKZSZSAG5ZS-PKryu__OTG4PK4-Za6EljPKZTBOoNm4C_8KytiAdD2AasudU4G9cQBaZJi7i2GH5FmqLSa9l&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=2zIAg2O2bSjI_mi_IFVBVw&oh=00_AfL41Y0ohjKTnMjd3p_iyrlKi-m2WxLdAzqVzMr47-cPiw&oe=683D242B",
                   "https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/495833300_1297414865718404_7087644507356093378_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2A-Q00Bm5zGL0AD9UurzTtvivyxL0oAK2-K_LEvSgAinYs8LFsqyZ2gxNcPJFvbCLwZKu7KJ6UxyogHqydgWE&_nc_ohc=r_3p33Jo-ooQ7kNvwHRkXuz&_nc_oc=Adlnk6GYZnLjwymJsNjA8iLaf0SaGzedXUXCGTTzm5bCanIYTes4dA7MVhtTAM3V-g8gG-vCk2kIRJOIoUCofbPD&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=aNNEge40LE0QIdwZqhaBKA&oh=00_AfIaNTsWkZwqgEgp16RvSsXkcMBmZzhfklwKvBIxSZfsfA&oe=683D1F0E",
                   "https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/494067706_1296972535762637_9147702517495026130_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFTXUyP7hFAIN5tbT4vhM1Ys4HboNF-9O2zgdug0X707aMgKpYy5a9SYU4XPiV0rVR6op-V1y0eHe4umwy77tdx&_nc_ohc=9iOJCXTSDQgQ7kNvwFyOays&_nc_oc=AdlhMAs0-8q2byZ4KVkfoBOzXKGkpAbJWWuKkUg_fu15B9Ru6Bjy1FYxTp9AO9fLAOKWmc8SmPKKs2wN9okeGMEO&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=zuD5FcqNy4T8xeSAaPXDGg&oh=00_AfJJbHYxbZVI6MzHzkke0rsVmrKkksIfNDgsHrZhmC3c_Q&oe=683D1C4E",
                   novidadeCozinha
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
                                className='sm:min-h-[480px] min-h-[450px] transition-all duration-300 group-hover:brightness-75 cursor-pointer'
                            />
                            <a href="https://wa.me/553432426156" target="_blank" rel="noopener noreferrer"
                                className="cursor-pointer absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                            >
                                COMPRAR
                            </a>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
