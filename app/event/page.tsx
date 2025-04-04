import React from 'react'
import App_Navbar from '../components/navbar'
import ImageSlider from '../components/ImageSlider'

const Event = () => {
  return (
    <div className="min-h-screen">
      <App_Navbar />
      <div >
        <ImageSlider />
      </div>
    </div>
  )
}

export default Event