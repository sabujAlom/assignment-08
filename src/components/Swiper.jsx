'use client';
import FeatureCard from './FeatureCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MySwiper({featureBooks}) {
  return (
    <Swiper
    className=' p-50 container mx-auto'
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        style={{ padding: '10px 0 40px 0' }}
        breakpoints={{
          640:  { slidesPerView: 1 },
          768:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
            {featureBooks.map(feature => (
                <SwiperSlide key={feature.id} className='h-auto'>
                    <FeatureCard feature={feature} />
                </SwiperSlide>
            ))}
        </Swiper>
  );
}