import papet from '../../assets/papet.jpeg'; // Imagem de exemplo
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Importando os estilos de navegação

export const Categorias = () => {
  return (
    <section id="novidades" className="h-[500px] bg-white py-20"> {/* Ajuste no padding vertical */}
      <div className="text-center mb-8 text-3xl font-bold text-blue-900">
        <h1>Categorias</h1>
      </div>
      <Swiper
        className="max-w-[1500px] mx-auto px-[10px]" // Centralizando o swiper
        breakpoints={{

          100: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        autoplay={{ delay: 2400 }}
        loop={true}
        navigation // Ativando a navegação
      >
        {/* Card 1 */}
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Tênis" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Tênis Feminio
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Tênis" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Tênis Masculino
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Chuteiras" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Chuteiras
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatilhas
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sandálias
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatos Femininos
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatos Masculinos
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Mocassins
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Papetes
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Mules
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Bota Feminina
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Coturno Masculino
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Coturno Feminino
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatênis
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]">
          <img src={papet} alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Botina
          </div>
        </SwiperSlide>

        {/* Adicione mais SwiperSlide conforme necessário */}
      </Swiper>
    </section>
  );
};
