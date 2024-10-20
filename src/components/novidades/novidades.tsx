import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import CardNovidades from "../../ui/CardNovidades";
import papet from '../../assets/papet.jpeg';
import outra from '../../assets/file.jpg';

const data = {
  novidades: [
    { marca: 'Nike', imageUrl: papet, preço: 169.90 },
    { marca: 'Adidas', imageUrl: papet, preço: 199.90 },
    { marca: 'Puma', imageUrl: papet, preço: 149.90 },
    { marca: 'Puma', imageUrl: outra, preço: 149.90 },
    { marca: 'Puma', imageUrl: outra, preço: 149.90 },
    { marca: 'Puma', imageUrl: "https://imgnike-a.akamaihd.net/1300x1300/027284IMA8.jpg", preço: 200.90 },
    { marca: 'Puma', imageUrl: "https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/missapatilhas/media/uploads/produtos/foto/qfewmtoo/image00004.png", preço: 149.90 },
  ]
};

export default function NovidadesCarrossel() {
  return (
    <section id="novidades" className=" bg-[#ecedf2] py-10 pt-[100px]"> {/* Reduzindo o padding vertical para diminuir a altura */}
      <div className="text-center mb-[50px] text-3xl font-bold text-blue-900"><h1>Novidades</h1></div>
      <Swiper className="max-w-[1500px] w-full px-[10px]"
        breakpoints={{
          100: {
            slidesPerView: 2, // 2 slides for medium screens
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          800: {
            slidesPerView: 3, // 3 slides for larger screens
          },
          1120: {
            slidesPerView: 4, // 4 slides for even larger screens
          },
          1536: {
            slidesPerView: 5, // 5 slides for very large screens
          },
        }}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay]}
      >
        {data.novidades.map((produto, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="" style={{ maxWidth: '800px', width: '100%' }}> {/* Define largura máxima para os slides */}
              <CardNovidades data={[produto]} />
            </div>
          </SwiperSlide>  
        ))}
      </Swiper>
    </section>
  );
}
