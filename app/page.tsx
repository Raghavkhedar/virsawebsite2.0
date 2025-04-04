import App_Navbar from "./components/navbar";
import MovieNight from "./components/EventsSlider";

export default function Home() {
  return (
    <div className="bg-black ">
      <div>
        <App_Navbar />
        <div className="p-3">
          <div className=" flex justify-around gap-10 m-8 p-8 rounded-xl shadow-lg bg-zinc-600 ">
            <div className="">text about the evnt</div>
            <div>
              <MovieNight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
