import img from '../../assets/climatiza.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export const ProductSections = () => {
    

    const Data = [
        {
            marca: "Nike Pegasus",
            imageUrl: img,
            preço: 549.99,
            rating: 5
        },
        {
            marca: "Adidas Runfalcon",
            imageUrl: img,
            preço: 349.99,
            rating: 4
        },
        {
            marca: "Under Armour HOVR",
            imageUrl: img,
            preço: 449.99,
            rating: 5
        },
    ];

    return (
        <section className="w-full py-12 flex justify-center lg:mt-[50px]">
            <Swiper
                className="w-full flex justify-center items-center items-center gap-8 md:max-w-[80%] sm:max-w-[90%] max-w-[95%] max-h-full"
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                spaceBetween={20}
                autoplay={{ delay: 2000 }}
                loop={true}
                modules={[Autoplay]}
            >

                <div className=''>
                    <SwiperSlide className='flex justify-center' >
                        <div className="" > 
                            <img src={img} alt="" className='sm:min-h-[500px] min-h-[450px]' data-aos="fade-right" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className="">
                            <img src={img} alt="" className='sm:min-h-[500px] min-h-[450px]' data-aos="fade-right" data-aos-delay="200" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex justify-center'>
                        <div className="">
                            <img src={img} alt="" className='sm:min-h-[500px] min-h-[450px]' data-aos="fade-right" data-aos-delay="300"/>
                        </div>
                    </SwiperSlide>
                </div>


            </Swiper>

        </section>
    );
};
