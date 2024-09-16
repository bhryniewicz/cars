import { useState } from "react";
import logo from "../../assets/logo.png";

export const Menu = ({ galleryRef, faqRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <header className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <>
          <ul className="flex gap-x-6 text-dark hidden sm:flex">
            <li
              className="cursor-pointer"
              onClick={() => handleScroll(galleryRef)}
            >
              Galeria zdjęć
            </li>
            <li className="cursor-pointer" onClick={() => handleScroll(faqRef)}>
              FaQ
            </li>
          </ul>
          <button className="bg-blue px-6 py-3 rounded-lg text-white font-semibold z-10 hidden sm:block hover:bg-white hover:text-blue hover:border-[1px] hover:border-blue hover:-m-[1px]">
            Zadzwon do nas
          </button>
        </>
        <button
          className="sm:hidden uppercase text-blue tracking-widest"
          onClick={() => setIsMenuOpen(true)}
        >
          Menu
        </button>
      </header>
      {isMenuOpen && (
        <div className="w-screen h-screen flex  items-center justify-center  absolute top-0 left-0 z-[1000] bg-blue p-20">
          <ul className="flex flex-col gap-y-6 text-center text-lg text-white">
            <li
              className="cursor-pointer"
              onClick={() => handleScroll(galleryRef)}
            >
              Galeria zdjęć
            </li>
            <li className="cursor-pointer" onClick={() => handleScroll(faqRef)}>
              FaQ
            </li>
            <li>Zadzwoń do nas</li>
          </ul>
        </div>
      )}
    </>
  );
};
