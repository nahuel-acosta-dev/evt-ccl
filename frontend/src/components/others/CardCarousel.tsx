import Petesburg from '../../img/petesburg.jpg';
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const CardCarousel = () => {

  return (
    <div className="mt-5">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt="" />
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt=""/>
        </SwiperSlide>
        <SwiperSlide className="my-swiper-slide">
          <Image src={Petesburg} className="img-fluid rounded" alt=""/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}



export default CardCarousel;