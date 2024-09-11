import hero from "./assets/Hero1.png";
import hero1 from "./assets/Element.svg";
import { arrayOfCars, arrayOfTrucks } from "./assets/galleryArray/arrayOfCars";
import { useState, useRef } from "react";
import { FaQArticle } from "./components/FaQArticle/FaQArticle";
import { Gallery } from "./components/Gallery/Gallery";
import { Menu } from "./components/Menu/Menu";

function App() {
  const [activeGallery, setActiveGallery] = useState("cars");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef(null);
  const faqRef = useRef(null);

  const photos = activeGallery === "cars" ? arrayOfCars : arrayOfTrucks;

  return (
    <>
      <div className="sm:container-2xl sm:px-40 px-8 ">
        <div className="py-6 h-screen">
          <Menu
            faqRef={faqRef}
            galleryRef={galleryRef}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <h1 className="text-4xl leading-8 text-[#282828] mt-12 mb-10 font-bebas-neue sm:text-7xl sm:leading-[5rem] sm:mt-32">
            SPRZEDAJEMY SAMOCHODY <br /> Z EUROPY
          </h1>
          <p className="leading-6 mb-12 font-roboto text-[#282828]">
            Kup komfortowy pojazd, aby każda podróż <br /> byla wyjątkowym
            przeżyciem
          </p>
          <img
            src={hero1}
            alt="hero image lines"
            className="absolute top-0 right-[100px] z-0 hidden sm:block"
          />
          <img
            src={hero}
            alt="hero image cars"
            className="absolute right-0 top-[450px]"
          />
          <div className="flex flex-col gap-x-6 gap-y-3 sm:flex-row">
            <button className="bg-[#0147FF] px-6 py-3 rounded-lg text-white font-semibold text-xs sm:text-base hover:bg-white hover:text-[#0147FF] hover:border-[1px] hover:border-[#0147FF] hover:-m-[1px]">
              Zobacz zdjecia
            </button>
            <button className="bg-white px-6 py-3 rounded-lg text-[#0147FF] border-[1px] border-[#0147FF] font-semibold text-xs sm:text-base hover:bg-[#0147FF] hover:text-white duration-300">
              Zadzwon do nas
            </button>
          </div>
        </div>
        <main className="mt-20 mb-24 sm:mb-[152px]" ref={galleryRef}>
          <Gallery
            photos={photos}
            setActiveGallery={setActiveGallery}
            activeGallery={activeGallery}
          />
        </main>
      </div>
      <div className="px-8 sm:px-40 bg-[#282828] py-20">
        <div className="flex flex-col sm:flex-row gap-x-6 text-white ">
          <FaQArticle
            title={
              "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo"
            }
            description={
              "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo. Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]"
            }
          />
          <FaQArticle
            title={
              "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo"
            }
            description={
              "Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo. Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Vestibulum et [...]"
            }
          />
        </div>
      </div>
      <footer
        className="bg-[#282828] flex justify-between items-center h-[10vh] px-12 sm:px-40 border-t-[1px]"
        ref={faqRef}
      >
        <h2 className="font-bold text-white">Cars Spot</h2>
        <h2 className="text-white underline">Polityka prywatności</h2>
      </footer>
    </>
  );
}

export default App;
