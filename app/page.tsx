import React from "react";
import App_Navbar from "./components/navbar";
import VideoPlayer from "./components/VideoPlayer";
import PhotoSliderHome from "./components/PhotoSliderHome";
import MovieNight from "./components/EventsSlider";
import {Gallery4Demo}  from "./components/galleryslider";
import { GlowingEffectDemo } from "./components/FactsHome";
import { FooterSection } from "./components/footer-section";

export default function Home() {
  return (
    <div className="bg-black">
      {/* Navbar */}
      <App_Navbar />

      {/* Featured Video Section */}
      <section className="w-full pb-40">
        <div>
          <VideoPlayer />
        </div>
      </section>

      {/* Gallery Slider Section */}
      <section className="w-full">
        <div>
          <PhotoSliderHome />
        </div>
      </section>

      {/* Gallery4Demo Section */}
      <section className="bg-black">
         <Gallery4Demo />
      </section>

      {/* Facts Section */}
      <section className="bg-black ">
        <GlowingEffectDemo />
      </section>

      {/* Footer Section */}
      <section className="bg-black ">
      <FooterSection />
      </section>
    </div>
  );
}
