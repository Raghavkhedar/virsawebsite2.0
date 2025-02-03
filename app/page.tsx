import App_Navbar from "./components/navbar";
import MovieNight from "./components/EventsSlider";

export default function Home() {
  return (
    <div className="bg-black ">
      <div>
        <App_Navbar />
        
        <div className="display:flex ">
          <div>

          </div>
          
          <div>
            <MovieNight />
          </div>
          
        </div>
      </div>
    </div>
  );
}
