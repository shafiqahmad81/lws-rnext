import { useState } from "react";
import { sculpturelist } from "./data";
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleClick() {
    setIndex(index + 1);
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let sculp = sculpturelist[index];
  return (
    <>
      <button
        className="border bg-green-500/60 rounded-md px-5 py-1"
        onClick={handleClick}
      >
        Next
      </button>
      <h2>
        <i>{sculp.name}</i> by {sculp.artist}
      </h2>
      <h3>
        ({index + 1} of {sculpturelist.length})
      </h3>
      <button
        className="border bg-green-700/80 rounded-md px-5 py-1 text-white"
        onClick={handleMoreClick}
      >
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculp.description}</p>}
      <img src={sculp.url} alt={sculp.alt} />
    </>
  );
}
