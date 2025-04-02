import img from '../../assets/climatiza.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const ProductSections = () => {


{/*   const Data = [
        {
            marca: "Nike Pegasus",
            imageUrl: img,
            preço: 549.99,
            rating: 5
        },
        {
            marca: "Adidas Runfalcon",
            imageUrl: img,
            preço: 349.99,
            rating: 4
        },
        {
            marca: "Under Armour HOVR",
            imageUrl: img,
            preço: 449.99,
            rating: 5
        },
    ];*/}

    return (
        <section className="w-full py-12 flex justify-center lg:mt-[30px]">
            <Swiper
                className="w-full flex justify-center items-center items-center gap-8  md:max-w-[75%] sm:max-w-[90%] max-w-[95%] max-h-full"
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

                <div className=''>
                    <SwiperSlide className='flex justify-center' >
                        <div className="group relative flex justify-center items-center overflow-hidden">
                            <img
                                src={img}
                                alt=""
                                className='sm:min-h-[480px] min-h-[450px] transition-all duration-300 group-hover:brightness-75'
                                data-aos="fade-right"
                            />
                            {/* Botão de Comprar */}
                            <button
                                className="absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                            >
                                COMPRAR
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className="group relative flex justify-center items-center overflow-hidden">
                            <img
                                src={img}
                                alt=""
                                className='sm:min-h-[480px] min-h-[450px] transition-all duration-300 group-hover:brightness-75'
                                data-aos="fade-right"
                            />
                            {/* Botão de Comprar */}
                            <button
                                className="absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                            >
                                COMPRAR
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className="group relative flex justify-center items-center overflow-hidden">
                            <img
                                src={img}
                                alt=""
                                className='sm:min-h-[480px] min-h-[450px] transition-all duration-300 group-hover:brightness-75'
                                data-aos="fade-right"
                            />
                            {/* Botão de Comprar */}
                            <button
                                className="absolute border-2 border-white text-white font-semibold px-8 py-3 rounded-full bg-black bg-opacity-50 hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105"
                            >
                                COMPRAR
                            </button>
                        </div>
                    </SwiperSlide>
                </div>


            </Swiper>

        </section>
    );
};
