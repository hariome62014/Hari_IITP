import React, { useState } from 'react';
import './Tag.css';

import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

 

  const [tag,setTag]=useState("");
  const {gif,loading,fetchData}=useGif(tag);
  

  const clickHandler = () => {
    fetchData();
  };
function changeHandler(event){
setTag(event.target.value);
}
  return (
    <div className='tagged-container'>
      <h1 className='random-text'>
        RANDOM  { tag} GIF
      </h1>
      {
        loading?<Spinner/> :<img src={gif} className='gif-box' alt="Random GIF" />
      }
          <input
        className='gif-search'
        onChange={changeHandler}
        value={tag}
        placeholder='Write desired GIF name'
        ></input>
      
      <button onClick={clickHandler} className='random-generate-btn'>
        Generate
      </button>
    </div>
  );
};

export default Tag;
