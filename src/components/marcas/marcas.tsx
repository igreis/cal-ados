import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import adidas from '../../assets/adidas.png'

// Import team logos (you would replace these with actual imported images)


// Define interface for team logo
interface TeamLogo {
  src: string;
  alt: string;
}

export const BrandsCarousel: React.FC = () => {
  const teamLogos: TeamLogo[] = [
    { src: adidas, alt: 'Argentina' },
    { src: adidas, alt: 'Chile' },
    { src: adidas, alt: 'Peru' },
    { src: adidas, alt: 'Germany' },
    { src: adidas, alt: 'Italy' },
    { src: adidas, alt: 'Spain' },
    { src: adidas, alt: 'Belgium' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4 mt-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        slidesPerView={4}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 3,
          },
          440: {
            slidesPerView: 4
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
           
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
            
          }
        }}
        className="team-logos-swiper"
      >
        {teamLogos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center" 
          
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="max-h-20 max-w-20 object-contain transition-transform duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

