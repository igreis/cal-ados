import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

//imagens
import novidade1 from '../../assets/novidade1.png'
import novidade2 from '../../assets/novidade2.png'

import { Pagination } from 'swiper/modules';

//import carna from '../../assets/carna.jpg'
import festival from '../../assets/festival.png'


export default function Slider() {
  return (
    <Swiper
      modules={[Pagination]}
      autoplay={{ delay: 4000 }}
      className="w-full"
    >


      {/* Slide 1 - Climatizador */}
      <SwiperSlide>
        <section className='' >
          <div className='md:block hidden'>
            <img src="https://scontent.fudi1-1.fna.fbcdn.net/v/t39.30808-6/486734161_1250020823791142_7155680603462650812_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEPnA-HDH3qvYvSEZHrGpSNTujBQtAnBUFO6MFC0CcFQdPHwT41O43cutgb_BrSdZDwAVSrGtOI9v1g1p69e6PJ&_nc_ohc=lEaWtykZ0x0Q7kNvwHfHUk8&_nc_oc=AdlzTU8_Oug11wlMPPoW1UgDWnqmSZITL_7--vhBQKH2KibAh2lD4KqpSJ37YNEOGorXEvLZNEWSn-ZTNMx0syVJ&_nc_zt=23&_nc_ht=scontent.fudi1-1.fna&_nc_gid=gSWJ-0QuBeQVIxNMZdYkQA&oh=00_AYGd6B8DP0KtL-MX6R4nu6ZJ5aqQhIeTgKPzL5TkbSexHA&oe=67F75E08" alt="" />
          </div>
          <div className='block md:hidden'>
            <img src={festival} alt="" />
          </div>
        </section>
      </SwiperSlide>

       {/* Slide 1 - Climatizador */}
       <SwiperSlide>
        <section className='' >
          <div className='md:block hidden'>
            <img src={novidade1} alt="" />
          </div>
          <div className='block md:hidden'>
            <img src={novidade2} alt="" />
          </div>
        </section>
      </SwiperSlide>


    </Swiper>

  );
}