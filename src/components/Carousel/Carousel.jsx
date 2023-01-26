import React from "react";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Carousel.scss";
import axios from "axios";

function Carousel({ moviesData }) {
    const [carouselImages, setCarouselImages] = useState([]);
    const [actualIndex, setActualIndex] = useState (0);
    const [actualImage, setActualImage] = useState (carouselImages[0]);
console.log(moviesData);    
console.log(carouselImages);

    useEffect(() => {setCarouselImages(moviesData.img)}, []);
  
    const reverse = () => {
        const test = actualIndex > 0;
        const nextIndex = test ? actualIndex - 1 : carouselImages.length -1;
        setActualImage(carouselImages[nextIndex]);
        setActualIndex(nextIndex);
    };

    const forward = () => {
        const test = actualIndex < carouselImages.length;
        const nextIndex = test ? actualIndex + 1 : 0;
        setActualImage(carouselImages[nextIndex]);
        setActualIndex(nextIndex);
    };   
   


   return (
   
   <>
    <img src={require(`../../images/${actualImage}`)} alt="actualImage" />
    <button onClick={reverse}>{"<"}</button>
    <button onClick={forward}>{">"}</button>
    </>
)
};
export default Carousel;



