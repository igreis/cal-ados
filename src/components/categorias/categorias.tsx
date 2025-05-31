import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Importando os estilos de navegação

export const Categorias = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="categorias" className="h-[400px] bg-white md:py-12 sm:mt-[10px]" > {/* Ajuste no padding vertical */}
      <div className="flex items-center justify-center w-full mb-[50px]" data-aos="fade-up">
        <div className="sm:w-[34%] w-[26%] border-b border-black mr-2"></div>
        <h1 className="text-3xl text-black text-center">Categorias</h1>
        <div className="sm:w-[34%] w-[26%] border-b border-black ml-2"></div>
      </div>

      <style>
        {`
    @keyframes expand {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  `}
      </style>


      <Swiper data-aos="fade-up" data-aos-delay="200"
        className="md:max-w-[76%] sm:max-w-[90%] mx-auto px-[10px]" // Centralizando o swiper
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
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("Tênis Casual")}>
          <img src="https://static.clube.netshoes.com.br/produtos/tenis-feminino-casual-original-estilo-shoes/14/30G-0016-014/30G-0016-014_zoom1.jpg?ts=1727867070" alt="Tênis" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Tênis Feminio
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://cdnv2.moovin.com.br/margilcalcados/imagens/produtos/det/-6512dcf813e97.jpeg" alt="Tênis" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Tênis Masculino
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://importego.com/cdn/shop/products/chuteira-profissional-de-futebolfutsal-masculina-antiderrapante-p20-42-importe-go-549300_800x.jpg?v=1686796288" alt="Chuteiras" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Chuteiras
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://cdnv2.moovin.com.br/margilcalcados/imagens/produtos/det/-643418b17d4dc.jpeg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatilhas
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/gugicalc/catalog/produtos/904-gg/sandalia-feminina-de-amarrar-na-perna-gladiadora-confortavel-904-branco-gg-4.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sandálias
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://usevitae.com.br/wp-content/uploads/2022/09/15148668263_Scarpin-Feminino-Preto-com-Detalhe-Aberto.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatos Femininos
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://domdosmares.com.br/cdn/shop/files/Sc6c22cacf97d4c5e97a5971f6745eecf4_800x.webp?v=1721220399" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatos Masculinos
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://images.tcdn.com.br/img/img_prod/1261257/sapatilha_mocassim_feminino_laco_65_1_020cf1191bf271b3de42ce10c6ac3d4b.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Mocassins
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/usefrans/catalog/kit-carteira-cinto/sandalias/duas-tiras-9.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Papetes
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://down-br.img.susercontent.com/file/4844601330fb57674896a8084ed02bb4" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Mules
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/pisomeco/media/uploads/produtos/foto/kxpcuhar/04.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Bota Feminina
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://cdnv2.moovin.com.br/margilcalcados/imagens/produtos/det/d5134d6d2f6b6016b6e833bcd0cdba11.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Coturno Masculino
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/versales/media/uploads/produtos/foto/bf7edbbf712d965.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Coturno Feminino
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://pegada.vtexassets.com/arquivos/ids/177682/Sapatenis-Pegada-Masculino-em-Couro-Areia-111101-07--2-.jpg?v=638272091550700000" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Sapatênis
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative min-w-[250px]" onClick={() => scrollToSection("tenisAdulto")}>
          <img src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/tropeiroboots/media/uploads/produtos/foto/rlesfynz/export-9248-1000px.jpg" alt="Sapatilhas" className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-50 rounded-lg">
            Botina
          </div>
        </SwiperSlide>

        {/* Adicione mais SwiperSlide conforme necessário */}
      </Swiper>
    </section>
  );
};
