import logo from "./assets/logo.png";
import hero from "./assets/Hero1.png";
import hero1 from "./assets/Element.svg";
import { arrayOfCars, arrayOfTrucks } from "./assets/galleryArray/arrayOfCars";
import { useState, useRef } from "react";
import { FaQArticle } from "./components/FaQArticle/FaQArticle";

function App() {
  const [activeGallery, setActiveGallery] = useState("cars");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef(null);
  const faqRef = useRef(null);

  const photos = activeGallery === "cars" ? arrayOfCars : arrayOfTrucks;

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="sm:container-2xl sm:px-40 px-8 ">
        <div className="py-6 h-screen">
          <header className="flex justify-between items-center">
            <img src={logo} alt="logo" />

            <>
              <ul className="flex gap-x-6 text-[#282828] hidden sm:flex">
                <li
                  className="cursor-pointer"
                  onClick={() => handleScroll(galleryRef)}
                >
                  Galeria zdjęć
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleScroll(faqRef)}
                >
                  FaQ
                </li>
              </ul>
              <button className="bg-[#0147FF] px-6 py-3 rounded-lg text-white font-semibold z-10 hidden sm:block">
                Zadzwon do nas
              </button>{" "}
            </>
            <button
              className="sm:hidden uppercase text-[#0147FF] tracking-widest"
              onClick={() => setIsMenuOpen(true)}
            >
              Menu
            </button>
          </header>
          {isMenuOpen && (
            <div className="w-screen h-screen flex  items-center justify-center  absolute top-0 left-0 z-[1000] bg-[#0147FF] p-20">
              <ul className="flex flex-col gap-y-6 text-center text-lg text-white">
                <li
                  className="cursor-pointer"
                  onClick={() => handleScroll(galleryRef)}
                >
                  Galeria zdjęć
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => handleScroll(faqRef)}
                >
                  FaQ
                </li>
                <li>Zadzwoń do nas</li>
              </ul>
            </div>
          )}

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
            <button className="bg-[#0147FF] px-6 py-3 rounded-lg text-white font-semibold text-xs sm:text-base">
              Zobacz zdjecia
            </button>
            <button className="bg-white px-6 py-3 rounded-lg text-[#0147FF] border-[1px] border-[#0147FF] font-semibold text-xs sm:text-base">
              Zadzwon do nas
            </button>
          </div>
        </div>
        <main className="gallery mt-20 mb-24 sm:mb-[152px]" ref={galleryRef}>
          <p className="text-base sm:text-[21px] text-[#0147FF] mb-4 sm:mb-0">
            Prezentacja firmy
          </p>
          <h2 className=" text-4xl leading-8 text-[#1D1D1B] uppercase font-bebas-neue sm:text-7xl sm:leading-[5rem] sm:text-[40px]">
            Zobacz naszą Galerię zdjęć
          </h2>
          <div className="mt-6 mb-8 sm:mb-20">
            <ul className="flex gap-x-12 text-xs sm:text-[15px]">
              <li
                className={`
                    ${
                      activeGallery == "cars" && "text-[#0147FF] underline"
                    } cursor-pointer`}
                onClick={() => setActiveGallery("cars")}
              >
                Samochody osobowe
              </li>
              <li
                className={`
                    ${
                      activeGallery == "trucks" && "text-[#0147FF] underline"
                    } cursor-pointer
                `}
                onClick={() => setActiveGallery("trucks")}
              >
                Samochody dostawcze
              </li>
            </ul>
          </div>
          <div className="flex gap-x-16 overflow-y-scroll scroll-smooth">
            {photos.map((image) => {
              return (
                <img src={image} alt="car image" key={crypto.randomUUID()} />
              );
            })}
          </div>
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
