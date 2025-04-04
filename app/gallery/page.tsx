import React from 'react'
import App_Navbar from '../components/navbar'
import GalleryMain from '../components/GalleryMain'
// import Timeline from '../components/Timeline'

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black">
      <App_Navbar />
      <div className="h-screen">
        <GalleryMain />
      </div>
    </div>
  )
}

export default Gallery
