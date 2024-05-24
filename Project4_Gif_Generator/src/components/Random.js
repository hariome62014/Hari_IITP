import React from "react";
import "./Random.css";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
const Random = () => {
  const { gif, loading, fetchData } = useGif();
return (
<div className="random-container">
      <h1 className="random-text">A RANDOM GIF</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} className="gif-box" alt="Random GIF" />
      )}

      <button onClick={()=> fetchData()} className="random-generate-btn">
        Generate
      </button>
    </div>
  );
};

export default Random;
