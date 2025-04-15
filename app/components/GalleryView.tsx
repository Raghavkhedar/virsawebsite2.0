'use client';

import React, { useEffect, useState } from 'react';
import styles from './GalleryView.module.css';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface GalleryImage {
  id: number;
  width: number;
  height: number;
  url?: string;
  caption?: string;
}

interface GalleryViewProps {
  selectedYear: string;
}

const GalleryView: React.FC<GalleryViewProps> = ({ selectedYear }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  // Generate different image sets based on the year
  useEffect(() => {
    // Define custom images for each year
    const yearToImages: Record<string, Array<{url: string, caption: string}>> = {
      '2011': [
        { url: 'photo.jpg', caption: 'Opening Ceremony 2011' },
        { url: 'gg.jpg', caption: 'Dance Performance 2011' },
        { url: 'photo.jpg', caption: 'Cultural Exhibition 2011' },
        { url: 'photo.jpg', caption: 'Award Ceremony 2011' },
        { url: 'photo.jpg', caption: 'Group Photo 2011' },
        { url: 'photo.jpg', caption: 'Closing Event 2011' },
      ],
      '2012': [
        { url: 'photo.jpg', caption: 'Main Stage 2012' },
        { url: 'photo.jpg', caption: 'Traditional Dance 2012' },
        { url: 'photo.jpg', caption: 'Music Concert 2012' },
        { url: 'photo.jpg', caption: 'Art Display 2012' },
        { url: 'photo.jpg', caption: 'Fashion Show 2012' },
        { url: 'photo.jpg', caption: 'Audience 2012' },
      ],
      '2013': [
        { url: 'photo.jpg', caption: 'Opening Night 2013' },
        { url: 'photo.jpg', caption: 'Cultural Showcase 2013' },
        { url: 'photo.jpg', caption: 'Dance Competition 2013' },
        { url: 'photo.jpg', caption: 'Food Festival 2013' },
        { url: 'photo.jpg', caption: 'Award Ceremony 2013' },
        { url: 'photo.jpg', caption: 'Closing Ceremony 2013' },
      ],
      '2014': [
        { url: 'photo.jpg', caption: 'Opening Night 2014' },
        { url: 'photo.jpg', caption: 'Cultural Showcase 2014' },
        { url: 'photo.jpg', caption: 'Dance Competition 2014' },
        { url: 'photo.jpg', caption: 'Food Festival 2014' },
        { url: 'photo.jpg', caption: 'Award Ceremony 2014' },
        { url: 'photo.jpg', caption: 'Closing Ceremony 2014' },
      ],
      '2015': [
        { url: 'photo.jpg', caption: 'Opening Night 2015' },
        { url: 'photo.jpg', caption: 'Cultural Showcase 2015' },
        { url: 'photo.jpg', caption: 'Dance Competition 2015' },
        { url: 'photo.jpg', caption: 'Food Festival 2015' },
        { url: 'photo.jpg', caption: 'Award Ceremony 2015' },
        { url: 'photo.jpg', caption: 'Closing Ceremony 2015' },
      ],
      '2016': [
        { url: 'photo.jpg', caption: 'Opening Night 2016' },
        { url: 'photo.jpg', caption: 'Cultural Showcase 2016' },
        { url: 'photo.jpg', caption: 'Dance Competition 2016' },
        { url: 'photo.jpg', caption: 'Food Festival 2016' },
        { url: 'photo.jpg', caption: 'Award Ceremony 2016' },
        { url: 'photo.jpg', caption: 'Closing Ceremony 2016' },
      ],
    };

    // Get images for the selected year or use default
    const yearImages = yearToImages[selectedYear] || yearToImages['2011'];
    
    // Generate gallery images with dimensions
    const newGalleryImages = yearImages.map((img, index) => {
      // Create different proportions for each image
      const heightMultiplier = Math.floor(Math.random() * 4) + 5; // 5-8
      const widthMultiplier = Math.floor(Math.random() * 4) + 5; // 5-8
      
      return {
        id: index,
        height: 200 * heightMultiplier,
        width: 200 * widthMultiplier,
        url: img.url,
        caption: img.caption
      };
    });
    
    setGalleryImages(newGalleryImages);
    
    // Re-initialize Fancybox when images change
    Fancybox.bind("[data-fancybox]", {
      // Options here
    });
    
    return () => {
      Fancybox.destroy();
    };
  }, [selectedYear]);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchCapable = 'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      (navigator as any).msMaxTouchPoints > 0;
    
    setIsTouchDevice(isTouchCapable);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.yearTitle}>Gallery from {selectedYear}</h2>
      <article className={styles.gallery}>
        {galleryImages.map((image) => (
          <a 
            key={`${selectedYear}-${image.id}`}
            className={styles.galleryLink}
            href={image.url}
            data-fancybox="gallery"
          >
            <figure className={`${styles.galleryImage} ${isTouchDevice ? styles.touch : ''}`}>
              <img 
                src={image.url}
                width={image.width}
                height={image.height}
                alt={image.caption}
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          </a>
        ))}
      </article>
    </div>
  );
};

export default GalleryView;