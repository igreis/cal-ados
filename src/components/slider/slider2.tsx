import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/pagination"
import "swiper/css/effect-cards"

import { Pagination, EffectCards } from "swiper/modules"
import bg from "../../assets/bg.jpeg"
//import carna from '../../assets/carna.jpg'

//imagens
import novidade1 from '../../assets/img/novidades/novidade1.jpg'
import novidade2 from '../../assets/img/novidades/novidade2.jpg'
import promoçao1 from '../../assets/img/promoçoes/promoçao1.jpg'
import promoçao2 from '../../assets/img/promoçoes/promoçao2.jpg'

export default function Slider2() {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 4000 }} className="w-full">
      {/* Slide 1 - Climatizador */}
      <SwiperSlide>
        <section
          className="mt-[15px] h-[60dvh] md:min-h-[75dvh] sm:min-h-[70dvh] lg:min-h-[70dvh] flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:max-w-[1770px] max-w-7xl sm:mt-[20px] w-full flex flex-col lg:flex-row justify-center items-center lg:gap-24">
            {/* Title Section */}
            <div className="flex flex-col items-center justify-start w-full lg:w-auto mt-[-10px] sm:mt-[-2px] md:mt-[-10px] lg:mt-[-130px]">
              <div className="flex flex-col items-center h850:pb-6 lg:pb-[70px]">
                <h1 className="font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 text-3xl text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center transition-all duration-300 writing-animation">
                  OFERTAS ESPECIAIS
                </h1>
                <div
                  className="w-16 sm:w-24 md:w-32 lg:w-[10vw] h-[1px] sm:h-[2px] md:h-[2px] bg-blue-900 my-2 sm:my-3 md:my-4 "
                  data-aos="zoom-in"
                  data-aos-delay="800"
                ></div>
                <button className="emerge-animation bg-gradient-to-r from-blue-700 to-blue-500 text-white py-1.5 sm:py-2 px-6 sm:px-8 lg:py-[1vh] lg:px-[2vw] rounded-full text-sm sm:text-base lg:text-[1vw] hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md">
                  SAIBA MAIS
                </button>
              </div>
              <div className="mt-[20px] hidden lg:block">
                <h2 className="flex items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 transition-all duration-300 emerge-animation">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Climatizador Premium 16L
                </h2>
                <span className="text-blue-700 font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-6 transition-all duration-300 emerge-animation">
                  R$ 399,90
                </span>

                <h2 className="flex items-center mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 transition-all duration-300 emerge-animation">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Climatizador Premium 20L
                </h2>
                <span className="text-blue-700 font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-6 transition-all duration-300 emerge-animation">
                  R$ 499,90
                </span>
              </div>
            </div>

            <style>
              {`

                @keyframes writing {
                  from {
                    width: 0;
                  }
                  to {
                    width: 100%;
                  }
                }

                .writing-animation {
                  display: inline-block;
                  white-space: nowrap;
                  overflow: hidden;
                  width: 0;
                  animation: writing 0.5s ease-out forwards;
                  animation-delay: 0.3s;
                }


                @keyframes emerge {
                  from {
                    opacity: 0;
                    transform: scale(0.8);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }

              .emerge-animation {
                opacity: 0;
                transform: scale(0.8);
                animation: emerge 0.8s ease-out forwards;
                animation-delay: 0.8s;
              }

              .text-gradient {
                background-size: 100%;
                background-clip: text;
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent; 
                -moz-text-fill-color: transparent;
              }
                `}
            </style>

            {/* Products Section */}
            <div className="w-full lg:w-auto">
              <div className="hidden sm:flex justify-center gap-8" data-aos="zoom-in-down" data-aos-delay="800">
                <div className="flex items-center lg:mt-[160px] relative">
                  <img
                    src={promoçao1}
                    alt=""
                    className="w-full h-[400px] lg:h-[352px] object-contain rounded-lg transition-all duration-300 "
                  />
                </div>
                <div className="flex items-center relative">
                  <img
                    src={promoçao2}
                    alt=""
                    className="w-full h-[400px] lg:h-[550px] object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Mobile View */}
              <div className="sm:hidden flex w-full mt-[10px]" data-aos="zoom-in" data-aos-delay="100">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper h-[330px] w-[310px] h850:h-[350px] h850:w-[350px]"
                >
                  <SwiperSlide>
                    <img
                      src={promoçao1}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={promoçao2}
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      {/* Slide 2 - Outro Produto */}
      <SwiperSlide>
        <section
          className="mt-[15px] h-[60dvh] md:min-h-[75dvh] sm:min-h-[70dvh] lg:min-h-[70dvh] bg-[#f4ff2b] flex justify-center items-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:max-w-[1770px] max-w-7xl sm:mt-[20px] w-full flex flex-col lg:flex-row justify-center items-center lg:gap-24">
            {/* Products Section (agora na esquerda) */}
            <div className="w-full lg:w-auto">
              <div className="hidden sm:flex justify-center gap-8" data-aos="zoom-in-down" data-aos-delay="800">
                <div className="flex items-center relative">
                  <img
                    src={novidade1}
                    alt=""
                    className="w-full h-[400px] lg:h-[550px] object-contain rounded-lg"
                  />
                </div>
                <div className="flex items-center lg:mt-[160px] relative">
                  <img
                    src={novidade2}
                    alt=""
                    className="w-full h-[400px] lg:h-[352px] object-contain rounded-lg transition-all duration-300"
                  />
                </div>
              </div>

              {/* Mobile View */}
              <div className="sm:hidden flex-col w-full " data-aos="zoom-in" data-aos-delay="100">
                <div className="flex flex-col items-center pb-2 h850:pb-6 lg:pb-[60px]">
                  <h1 className="font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 text-3xl text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center transition-all duration-300 writing-animation">
                    NOVIDADES
                  </h1>
                  <div
                    className="w-16 sm:w-24 md:w-32 lg:w-[10vw] h-[1px] sm:h-[2px] md:h-[2px] bg-blue-900 my-2 sm:my-3 md:my-4 "
                    data-aos="zoom-in"
                    data-aos-delay="800"
                  ></div>
                  <button className="emerge-animation bg-gradient-to-r from-blue-700 to-blue-500 text-white py-1.5 sm:py-2 px-6 sm:px-8 lg:py-[1vh] lg:px-[2vw] rounded-full text-sm sm:text-base lg:text-[1vw] hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md">
                    SAIBA MAIS
                  </button>
                </div>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper h-[330px] w-[310px] h850:h-[350px] h850:w-[350px] "
                >
                  <SwiperSlide>
                    <img
                    src= {novidade1}
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={novidade2}
                      alt=""
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            {/* Title Section (agora na direita) */}
            <div className="flex flex-col items-center justify-start w-full lg:w-auto mt-[-10px] sm:mt-[-2px] md:mt-[-10px] lg:mt-[-130px]">
              <div className="hidden sm:flex flex-col items-center h850:pb-6 lg:pb-[70px]">
                <h1 className="font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500 text-3xl text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-center transition-all duration-300 writing-animation">
                  NOVIDADES
                </h1>
                <div
                  className="w-16 sm:w-24 md:w-32 lg:w-[10vw] h-[1px] sm:h-[2px] md:h-[2px] bg-blue-900 my-2 sm:my-3 md:my-4 "
                  data-aos="zoom-in"
                  data-aos-delay="800"
                ></div>
                <button className="emerge-animation bg-gradient-to-r from-blue-700 to-blue-500 text-white py-1.5 sm:py-2 px-6 sm:px-8 lg:py-[1vh] lg:px-[2vw] rounded-full text-sm sm:text-base lg:text-[1vw] hover:from-blue-800 hover:to-blue-600 transition-all duration-300 shadow-md">
                  SAIBA MAIS
                </button>
              </div>
              <div className="mt-[20px] hidden lg:block">
                <h2 className="flex items-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 transition-all duration-300 emerge-animation">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Climatizador Premium 16L
                </h2>
                <span className="text-blue-700 font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-6 transition-all duration-300 emerge-animation">
                  R$ 399,90
                </span>

                <h2 className="flex items-center mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 transition-all duration-300 emerge-animation">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Climatizador Premium 20L
                </h2>
                <span className="text-blue-700 font-bold text-base sm:text-lg md:text-xl lg:text-2xl pl-6 transition-all duration-300 emerge-animation">
                  R$ 499,90
                </span>
              </div>
            </div>

            {/* Estilos para animações */}
            <style>
              {`
          @keyframes writing {
            from { width: 0; }
            to { width: 100%; }
          }

          .writing-animation {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            width: 0;
            animation: writing 0.5s ease-out forwards;
            animation-delay: 0.3s;
          }

          @keyframes emerge {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }

          .emerge-animation {
            opacity: 0;
            transform: scale(0.8);
            animation: emerge 0.8s ease-out forwards;
            animation-delay: 0.8s;
          }

          .text-gradient {
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
          }
        `}
            </style>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  )
}

