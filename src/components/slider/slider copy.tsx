import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import bg from '../../assets/liquid-cheese.png';
import tapet from '../../assets/tapetes.jpg';
import { EffectCreative, Pagination, Autoplay, EffectCards } from 'swiper/modules';

export default function Slider() {
    return (
        <section
            className="h-[70dvh] bg-[#f4ff2b] flex justify-center items-center"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-h-[600px] max-w-full h-full w-full flex justify-center flex-col lg:flex-row">
                <div className="flex flex-col items-center min-h-[350px] flex-start justify-start">
                    <div className="flex flex-col items-center pb-[60px] min-h-[350px]">
                        <h1 className="font-bold text-blue-900 italic text-8xl">Perfumes</h1>
                        <div className="w-[10vw] h-[0.5vh] bg-blue-900 mb-[3vh]"></div>
                        <button className="bg-black text-white py-[1vh] px-[2vw] rounded-full text-[1vw] hover:bg-gray-800">
                            Saiba Mais
                        </button>
                    </div>
                </div>
                <div className="flex justify-center gap-[30px] lg:flex-col">
                    {/* Second image with price */}
                    <div className="flex items-center relative lg:mt-[160px]">
                        <img
                            src={tapet}
                            alt=""
                            className="max-h-[352px] h-full w-full rounded-lg shadow-lg border-[6px] border-[#ffb703]"
                        />
                        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 bg-blue-900 text-white py-2 px-4 rounded-md text-xl font-semibold shadow-lg">
                            R$ 149,99
                        </div>
                    </div>
                    {/* First image with price */}
                    <div className="flex items-center relative">
                        <img
                            src={tapet}
                            alt=""
                            className="max-h-[550px] h-full w-full min-h-[470px] rounded-lg shadow-lg border-[6px] border-[#ffb703]"
                        />
                        <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-blue-900 text-white py-2 px-4 rounded-md text-xl font-semibold shadow-lg">
                            R$ 99,99
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}