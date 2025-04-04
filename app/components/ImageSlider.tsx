'use client';

import React, { useState } from 'react';
import styles from './ImageSlider.module.css';

interface SliderItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ImageSlider: React.FC = () => {
  const [items, setItems] = useState<SliderItem[]>([
    {
      id: 1,
      title: "Lossless Youths",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg"
    },
    {
      id: 2,
      title: "gg Bond",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://i.redd.it/tc0aqpv92pn21.jpg"
    },
    {
      id: 3,
      title: "The Gate Keeper",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg"
    },
    {
      id: 4,
      title: "Last Trace Of Us",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://images7.alphacoders.com/878/878663.jpg"
    },
    {
      id: 5,
      title: "Urban Decay",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg"
    },
    {
      id: 6,
      title: "The Migration",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
      imageUrl: "https://da.se/app/uploads/2015/09/simon-december1994.jpg"
    }
  ]);

  const handleNext = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      if (firstItem) {
        newItems.push(firstItem);
      }
      return newItems;
    });
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      if (lastItem) {
        newItems.unshift(lastItem);
      }
      return newItems;
    });
  };

  return (
    <main className={styles.main}>
      <ul className={styles.slider}>
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.item}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className={styles.content}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <nav className={styles.nav}>
        <button className={styles.btn} onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <path fill="currentColor" d="M328 112L184 256l144 144"/>
          </svg>
        </button>
        <button className={styles.btn} onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
            <path fill="currentColor" d="M184 112l144 144-144 144"/>
          </svg>
        </button>
      </nav>
    </main>
  );
};

export default ImageSlider; 