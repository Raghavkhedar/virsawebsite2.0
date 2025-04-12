import React from "react";
import App_Navbar from "./components/navbar";
import MovieNight from "./components/EventsSlider";
import {Gallery4Demo}  from "./components/galleryslider";
import VideoPlayer from "./components/VideoPlayer";
import PhotoSliderHome from "./components/PhotoSliderHome";
import { FooterSection } from "./components/footer-section";

export default function Home() {
  return (
    <div className="bg-black">
      {/* Navbar */}
      <App_Navbar />

      {/* Featured Video Section */}
      <section className="w-full pb-40  ">
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

      {/* Events Section */}
      {/* <div className="p-3">
        <div className="flex justify-around gap-10 m-8 p-8 rounded-xl shadow-lg bg-zinc-600">
          <div className="">text about the event</div>
          <div>
            <MovieNight />
          </div>
        </div>
      </div> */}

        <Gallery4Demo />


      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
