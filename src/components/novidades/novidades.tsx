import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import CardNovidades from "../../ui/CardNovidades";
import Modal from '../../ui/modal';
import outra from '../../assets/file.jpg';

const data = {
  novidades: [
    { marca: 'Nike', imageUrl: outra, preço: 169.90 },
    { marca: 'Adidas', imageUrl: outra, preço: 199.90 },
    { marca: 'Puma', imageUrl: outra, preço: 149.90 },
    { marca: 'Puma', imageUrl: outra, preço: 149.90 },
    { marca: 'Puma', imageUrl: "https://imgnike-a.akamaihd.net/1300x1300/027284IMA8.jpg", preço: 200.90 },
    { marca: 'Puma', imageUrl: "https://cdn.shoppub.io/cdn-cgi/image/w=600,h=600,q=80,f=auto/missapatilhas/media/uploads/produtos/foto/qfewmtoo/image00004.png", preço: 149.90 },
  ]
};

interface Data {
  marca: string;
  imageUrl: string;
  preço: number;
}

export default function NovidadesCarrossel() {
  const [selectedProduct, setSelectedProduct] = useState<Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (produto: Data) => {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section id="novidades" className="bg-white py-10 pt-[100px]">
      <div className="flex items-center justify-center mb-[50px]">
        <div className="w-[35%] border-b border-blue-300 mr-2"></div>
        <h1 className="text-3xl font-bold text-blue-900">Novidades</h1>
        <div className="w-[35%] border-b border-blue-300 ml-2"></div>
      </div>

      <Swiper
        className="md:max-w-[80%] sm:max-w-[90%] max-w-[95%] w-full px-[10px]"
        breakpoints={{
          100: {
            slidesPerView: 2,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          768: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        autoplay={{ delay: 2000 }}
        loop={true}
        modules={[Autoplay]}
      >
        {data.novidades.map((produto, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="" style={{ maxWidth: '800px', width: '100%' }}>
              <div onClick={() => openModal(produto)}>
                <CardNovidades data={[produto]} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedProduct && (
        <Modal isOpen={isModalOpen} product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
}
