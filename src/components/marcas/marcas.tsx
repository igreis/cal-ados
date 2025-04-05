import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike-logo-47A65A59D5-seeklogo.com.png'
import ol from '../../assets/olympikus.png'
import mizuno from '../../assets/mizuno-seeklogo.png'

// Import team logos (you would replace these with actual imported images)


// Define interface for team logo
interface TeamLogo {
  src: string;
  alt: string;
  delay: number
}

export const BrandsCarousel: React.FC = () => {
  const teamLogos: TeamLogo[] = [
    { src: mizuno, alt: 'Argentina', delay: 0 },
    { src: nike, alt: 'Chile', delay: 200 },
    { src: ol, alt: 'Peru', delay: 300 },
    { src: adidas, alt: 'Italy', delay: 500 },
    { src: adidas, alt: 'Italy', delay: 500 },
    { src: adidas, alt: 'Italy', delay: 500 },
    { src: adidas, alt: 'Italy', delay: 500 },
    { src: adidas, alt: 'Italy', delay: 500 },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto sm:p-4 sm:mt-14 mb-8">
      <div className='flex justify-center' data-aos="fade-up">
        <h1 className='text-2xl mb-10'>
          Marcas
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        slidesPerView={4}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 4,
          },
          380: {
            slidesPerView: 5,
          },
          // when window width is >= 640px
          530: {
            slidesPerView: 6,
           
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 7,
            
          },
          1024: {
            slidesPerView: 8,
          },
        }}
        className="team-logos-swiper"
      >
        {teamLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center mx-auto" 
          
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="md:max-h-15 md:max-w-15 max-h-14 max-w-14 object-contain transition-transform duration-300"
              data-aos="fade-up" data-aos-delay= {logo.delay}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

