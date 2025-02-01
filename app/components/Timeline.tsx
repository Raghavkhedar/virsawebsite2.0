"use client";
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Timeline.css';

export default function Timeline() {
  useEffect(() => {
    new Swiper(".timeline .swiper-container", {
      modules: [Navigation, Pagination, Mousewheel],
      direction: 'vertical',
      loop: false,
      speed: 1600,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          const years = ["2011", "2012", "2013", "2014", "2015", "2016"];
          return '<span class="' + className + '">' + years[index] + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          direction: 'horizontal',
        }
      }
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Responsive Slider Timeline</h1>
      <div className="timeline">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="swiper-slide"
                style={{ backgroundImage: `url(https://unsplash.it/1920/500?image=1${num})` }}
                data-year={`201${num}`}
              >
                <div className="swiper-slide-content">
                  <span className="timeline-year">201{num}</span>
                  <h4 className="timeline-title">Our nice super title</h4>
                  <p className="timeline-text">
                    Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
} 