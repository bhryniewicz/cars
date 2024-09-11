export const Gallery = ({ photos, setActiveGallery, activeGallery }) => {
  return (
    <>
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
          return <img src={image} alt="car image" key={crypto.randomUUID()} />;
        })}
      </div>
    </>
  );
};
