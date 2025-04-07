import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-creative"
import "swiper/css/pagination"
import "swiper/css/effect-cards"

import { Pagination, EffectCards } from "swiper/modules"
import bg from "../../assets/bg.jpeg"
//import carna from '../../assets/carna.jpg'

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
                    src="https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/486971043_1254726499987241_8431987309192830650_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKsh5cV8Y2J3UsrTIK61r0YyHw79BWcqtjIfDv0FZyq3jQFYlV7O8g2t-SvedncJOB7cOofbGWsb6QJZhVVSLE&_nc_ohc=8Jn1VBOdaK0Q7kNvwHOpECT&_nc_oc=Adlvkdn54r7jD01VQNQ477AwovOH1x08hCS1Qmo4aZKfRteAa2SNdYJ4kPbU7hST5RgeUIwoQ5DVXhZHaX4TrR5f&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=D8ClPkZgmt_HtMRLiUDrqg&oh=00_AfEnCJvHN2a5oiYyTeSsGj58HemDRqprdBi-8BOLrbXOgw&oe=67F8FD8F"
                    alt=""
                    className="w-full h-[400px] lg:h-[352px] object-contain rounded-lg transition-all duration-300 "
                  />
                </div>
                <div className="flex items-center relative">
                  <img
                    src="https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/486543884_1252812086845349_8090270446861365970_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHkU9VAmyg1kkgGx8XIrRpym3nqxUsYek6beerFSxh6TgZ13yiW5eJne9yy2e9H0bkwN6DXQsgaNQzIA3VQCFd2&_nc_ohc=dtkPS0kaksQQ7kNvwFYnN4F&_nc_oc=Adl7FHwAlURjw490la0Bd0TLDAs_-HzR7HK9IyeRU9B53H_U_Rs426fnl0TMEDSgxEjTJQgkfSITGfcwqMx-d1pL&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=sn75sbYT2w_DoXjHkV_ZHQ&oh=00_AfEd_NAWFBeXp_rPiOWZozgZw6FYcsExlM2Sj0vGdBpbxA&oe=67F8EEEB"
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
                      src="https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/486543884_1252812086845349_8090270446861365970_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHkU9VAmyg1kkgGx8XIrRpym3nqxUsYek6beerFSxh6TgZ13yiW5eJne9yy2e9H0bkwN6DXQsgaNQzIA3VQCFd2&_nc_ohc=dtkPS0kaksQQ7kNvwFYnN4F&_nc_oc=Adl7FHwAlURjw490la0Bd0TLDAs_-HzR7HK9IyeRU9B53H_U_Rs426fnl0TMEDSgxEjTJQgkfSITGfcwqMx-d1pL&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=sn75sbYT2w_DoXjHkV_ZHQ&oh=00_AfEd_NAWFBeXp_rPiOWZozgZw6FYcsExlM2Sj0vGdBpbxA&oe=67F8EEEB"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/486971043_1254726499987241_8431987309192830650_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKsh5cV8Y2J3UsrTIK61r0YyHw79BWcqtjIfDv0FZyq3jQFYlV7O8g2t-SvedncJOB7cOofbGWsb6QJZhVVSLE&_nc_ohc=8Jn1VBOdaK0Q7kNvwHOpECT&_nc_oc=Adlvkdn54r7jD01VQNQ477AwovOH1x08hCS1Qmo4aZKfRteAa2SNdYJ4kPbU7hST5RgeUIwoQ5DVXhZHaX4TrR5f&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=D8ClPkZgmt_HtMRLiUDrqg&oh=00_AfEnCJvHN2a5oiYyTeSsGj58HemDRqprdBi-8BOLrbXOgw&oe=67F8FD8F"
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
                    src="https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/487070403_1252807026845855_4852960794209659916_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4SoMYtkEtK-oBDcfzDrjs6_H0LPd02a3r8fQs93TZrZg9q1gZ9VI34qkoyR7DFnJJ4ie60Vx4ZjeU4IJiSJnq&_nc_ohc=9B0SnXst_jAQ7kNvwF5enCb&_nc_oc=AdlC_bduoouQ95iCOZH_gcfJ-9SdbIc7BZEhT_U1LC3hxs7eEfeBZlg5N1IyvlIuTTecz9UB_qWl6jl1rJ2Vrhmd&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=BnZempgfybn1fptSffcrFw&oh=00_AfHBnQg8JW8ODYtkJyXIINapMoVP3suXTVCEB4ztxtkXSQ&oe=67F8FBE7"
                    alt=""
                    className="w-full h-[400px] lg:h-[550px] object-contain rounded-lg"
                  />
                </div>
                <div className="flex items-center lg:mt-[160px] relative">
                  <img
                    src="https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/482260572_1252806893512535_6260073849148144572_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGgAzn18dq08KT6DHrpJkyXXWFShU4-w3JdYVKFTj7DchgfgtezqyUtwbId6UTFG93aQ0C9pUMPL_UOdQq9ul-A&_nc_ohc=em31O2PLMgwQ7kNvwEOC7ms&_nc_oc=Adkpod5A-fzjPxScEOlcm-BN3iTXyazHkeYZW6A7AiqzAmPhU_ydjV3VLVr4AXRmbczqRqudDCLhdrEVbeIza8tL&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=ainbQaoZyR0k6C2Wgdn-Qg&oh=00_AfEslOfm20dFJ6IIKU4fv-ZGERCv7EX67J9USliaqOUvSw&oe=67F8D9B6"
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
                      src="https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/487070403_1252807026845855_4852960794209659916_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4SoMYtkEtK-oBDcfzDrjs6_H0LPd02a3r8fQs93TZrZg9q1gZ9VI34qkoyR7DFnJJ4ie60Vx4ZjeU4IJiSJnq&_nc_ohc=9B0SnXst_jAQ7kNvwF5enCb&_nc_oc=AdlC_bduoouQ95iCOZH_gcfJ-9SdbIc7BZEhT_U1LC3hxs7eEfeBZlg5N1IyvlIuTTecz9UB_qWl6jl1rJ2Vrhmd&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=BnZempgfybn1fptSffcrFw&oh=00_AfHBnQg8JW8ODYtkJyXIINapMoVP3suXTVCEB4ztxtkXSQ&oe=67F8FBE7"
                      alt=""
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://scontent.fudi1-2.fna.fbcdn.net/v/t39.30808-6/482260572_1252806893512535_6260073849148144572_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGgAzn18dq08KT6DHrpJkyXXWFShU4-w3JdYVKFTj7DchgfgtezqyUtwbId6UTFG93aQ0C9pUMPL_UOdQq9ul-A&_nc_ohc=em31O2PLMgwQ7kNvwEOC7ms&_nc_oc=Adkpod5A-fzjPxScEOlcm-BN3iTXyazHkeYZW6A7AiqzAmPhU_ydjV3VLVr4AXRmbczqRqudDCLhdrEVbeIza8tL&_nc_zt=23&_nc_ht=scontent.fudi1-2.fna&_nc_gid=ainbQaoZyR0k6C2Wgdn-Qg&oh=00_AfEslOfm20dFJ6IIKU4fv-ZGERCv7EX67J9USliaqOUvSw&oe=67F8D9B6"
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

