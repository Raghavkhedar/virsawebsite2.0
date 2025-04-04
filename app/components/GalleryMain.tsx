'use client';

import React from 'react';
import styles from './GalleryMain.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TimelineItem {
  year: string;
  title: string;
  text: string;
  imageUrl: string;
}

const GalleryMain: React.FC = () => {
  const items: TimelineItem[] = [
    {
      year: "2011",
      title: "Our nice super title",
      text: "Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=11"
    },
    {
      year: "2012",
      title: "Our nice super title",
      text: "Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=12"
    },
    {
      year: "2013",
      title: "Our nice super title",
      text: "Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=13"
    },
    {
      year: "2014",
      title: "Our nice super title",
      text: "Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=14"
    },
    {
      year: "2015",
      title: "Our nice super title",
      text: "Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=15"
    },
    {
      year: "2016",
      title: "Our nice super title",
      text: "Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=16"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <Swiper
          direction="vertical"
          modules={[Navigation, Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}">${items[index].year}</span>`;
            },
            type: 'bullets',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          slidesPerView={1}
          speed={800}
          mousewheel={true}
          className={styles.swiperContainer}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className={styles.swiperSlide}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className={styles.swiperSlideContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h4 className={styles.timelineTitle}>{item.title}</h4>
                <p className={styles.timelineText}>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryMain; 