import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const images = [
  "../../assets/img1.svg",
  "../../assets/img2.svg",
  "../../assets/img3.svg",
  "../../assets/img4.svg"
];

export const ImageCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={2000}
        modules={[Autoplay]}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Ilustración ${i + 1}`} className="w-full h-auto object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}