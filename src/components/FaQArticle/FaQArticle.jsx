import { useState } from "react";
import arrowDown from "../../assets/arrowDown.svg";

export const FaQArticle = ({ title, description }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleDescriptionOpen = () => {
    setIsDescriptionOpen((prev) => !prev);
  };

  return (
    <article className="flex flex-col gap-y-6 items-start sm:w-[50%] pb-12 last:pb-0 sm:pb-0">
      <h3 className="font-bebas-neue text-lg sm:text-[25px] pr-6">{title}</h3>
      <p className="font-roboto pr-6 text-sm">
        {isDescriptionOpen ? description : `${description.slice(0, 70)}...`}
      </p>
      <button
        className="flex items-center relative gap-x-2 before: before:absolute before:-bottom-1 before:w-full before:bg-white before:h-[1px]"
        onClick={handleDescriptionOpen}
      >
        <span>{isDescriptionOpen ? "Zwiń" : "Rozwiń"}</span>
        <img src={arrowDown} alt="arrowDow" />
      </button>
    </article>
  );
};
