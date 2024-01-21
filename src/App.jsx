import { useState } from "react";
import { sculpturelist } from "./data.jsx";
function App() {
  const [index, setIndex] = useState(0);
  const [showmore, setShowmore] = useState(false);
  function handleClick() {
    setIndex(index + 1);
  }
  function handlemoreClick() {
    setShowmore(!showmore);
  }
  let sculpture = sculpturelist[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculpturelist.length})
      </h3>
      <button onClick={handlemoreClick}>
        {showmore ? "Hide" : "Show"} details
      </button>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

export default App;
