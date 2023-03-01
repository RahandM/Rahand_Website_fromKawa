import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  const shortenedText = showAll ? description : description.slice(0, 100);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
      {shortenedText}
      </p>
      {description.length > 100 && (
        <button onClick={toggleShowAll}>
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
