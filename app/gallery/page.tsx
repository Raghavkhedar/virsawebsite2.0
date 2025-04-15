import React from 'react';
import App_Navbar from '../components/navbar';
import TimelineGallery from '../components/TimelineGallery';
import { FooterSection } from '../components/footer-section';

const GalleryPage = () => {
  return (
    <>
      <App_Navbar />
      <TimelineGallery />
      <FooterSection />
    </>
  );
};

export default GalleryPage;
