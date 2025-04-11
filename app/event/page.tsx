import React from 'react'
import App_Navbar from '../components/navbar'
import ImageSlider from '../components/ImageSlider'
import { FooterSection } from '../components/footer-section'

const Event = () => {
  return (
    <div className="min-h-screen">
      <App_Navbar />
      <div >
        <ImageSlider />
      </div>
      <FooterSection />
    </div>
  )
}

export default Event