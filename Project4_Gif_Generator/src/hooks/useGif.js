import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {
    const randomGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const taggedGifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const [loading, setLoading] = useState(false);
  const url= (tag? taggedGifUrl:randomGifUrl);
  const [gif, setGif] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return {gif,loading,fetchData};
};

export default useGif;
