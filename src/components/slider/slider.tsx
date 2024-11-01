import { Swiper, SwiperSlide } from 'swiper/react';
import tapet from '../../assets/tapetes.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation, EffectCards } from 'swiper/modules';

export default function Slider() {
    return (
        <section className='h-[600px]'>
            <div className='flex mx-6'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}

                    pagination={false}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-[680px]"
                >
                    <SwiperSlide className='w-full flex sm:flex-row flex-col justify-center gap-[5%] lg:gap-[20%] sm:mt-[50px]'>

                        <div className=''>
                            <div className='flex flex-col items-center'>
                                <h1 className="text-7xl md:text-8xl font-bold text-blue-900 italic xl:text-8xl mb-2">Tapete</h1>
                                {/* Linha abaixo do título */}
                                <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
                                {/* Botão */}
                                <button className="max-w-[300px] bg-black text-white py-2 px-4 mt-4 rounded-full text-lg hover:bg-gray-800">
                                    Saiba Mais
                                </button>
                            </div>
                        </div>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Autoplay]}
                            autoplay={{
                                delay: 2500, // Intervalo de 2.5 segundos entre slides
                                disableOnInteraction: false, // Continua o autoplay mesmo após interação
                              }}
                            className="mySwiper max-w-[420px] sm:max-w-[600px] mx-0 max-h-[580px]"
                        >
                            <SwiperSlide>
                                <div className=''>
                                    <img src={tapet} alt="" className="rounded-lg w-[90%] sm:w-[90%] object-cover" />
                                    </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div><img src={tapet} alt="" className='rounded-lg'/></div>
                            </SwiperSlide>
                        </Swiper>


                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                </Swiper>
            </div>

        </ section>
    );
}
