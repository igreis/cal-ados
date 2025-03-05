import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Pagination, Autoplay } from 'swiper/modules';
import bg from '../../assets/liquid-cheese.png';
import tapet from '../../assets/tapetes.jpg';
import climatiza from '../../assets/climatiza.jpg';
import clima2 from '../../assets/clima2.jpg';
import climas from '../../assets/climas.jpg';
import blue from '../../assets/blue.png';
import carna from '../../assets/carna.jpg'; // Imagem adicionada

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      className="w-full"
    >
      {/* Slide 1 - Climatizador */}
      <SwiperSlide>
        <section
          className="md:min-h-[75dvh] max-h-[60dvh] sm:min-h-[70dvh] lg:min-h-[70dvh] bg-[#f4ff2b] flex justify-center items-center"
        >
          <div className="lg:max-w-[1770px] max-w-7xl md:mt-[20px] w-full flex flex-col lg:flex-row justify-center items-center lg:gap-24">
            {/* Title Section */}
            <div className="flex flex-col items-center justify-start w-full lg:w-auto mt-[-10px] sm:mt-[-2px] md:mt-[-10px] lg:mt-[-280px]">
              <div className="hidden sm:flex flex-col items-center pb-6 lg:pb-[60px]">
                <h1 className="font-bold text-blue-900 italic text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center transition-all duration-300 writing-animation">
                  Climatizador
                </h1>
                <div className="w-16 sm:w-24 md:w-32 lg:w-[10vw] h-[1px] sm:h-[2px] md:h-[2px] bg-blue-900 my-2 sm:my-3 md:my-4 " data-aos="zoom-in" data-aos-delay="800"></div>
                <button className="emerge-animation bg-black text-white py-1.5 sm:py-2 px-4 sm:px-6 lg:py-[1vh] lg:px-[2vw] rounded-full text-sm sm:text-base lg:text-[1vw] hover:bg-gray-800 transition-all duration-300">
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* Products Section */}
            <div className="w-full lg:w-auto">
              <div className="hidden sm:flex justify-center gap-8" data-aos="zoom-in-down" data-aos-delay="800" >
                <div className="flex items-center lg:mt-[160px] relative">
                  <img
                    src={clima2}
                    alt=""
                    className="w-full h-[400px] lg:h-[352px] object-contain rounded-lg "
                  />
                  <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-blue-900 text-white py-2 px-4 rounded-md text-xl font-semibold shadow-lg emerge-animation">
                    R$ 149,99
                  </div>
                </div>
                <div className="flex items-center relative">
                  <img
                    src={climatiza}
                    alt=""
                    className="w-full h-[400px] lg:h-[550px] object-contain rounded-lg "
                  />
                  <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-blue-900 text-white py-2 px-4 rounded-md text-xl font-semibold shadow-lg emerge-animation">
                    R$ 99,99
                  </div>
                </div>
              </div>

              {/* Mobile View */}
              <div className="sm:hidden flex w-full h-full mt-[10px]" data-aos="zoom-in" data-aos-delay="100">
                <Swiper className="w-full h-full">
                  <SwiperSlide>
                    <img src={climatiza} alt="" className="w-full h-full object-cover" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={carna} alt="" className="w-full h-full object-cover" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 2 - Outro Produto */}
      <SwiperSlide>
        <section className="hidden sm:flex max-h-[60dvh] sm:min-h-[70dvh] lg:min-h-[70dvh] bg-[#e3e3e3] flex justify-center items-center">
          <h1 className="text-4xl font-bold">Outro Produto Aqui</h1>
        </section>

        {/* Mobile View */}
        <div className="sm:hidden flex w-full h-full">
          <Swiper className="w-full h-full">
            <SwiperSlide>
              <img src={carna} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={carna} alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
