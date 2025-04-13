import Title from "../titleComponent/Title";
import './albums.css';
import imgOne from './../../assets/albums/biker-helmet-neon-5120x2880-15476.jpg'
import imgTwo from './../../assets/albums/news-2.jpg'
import imgThree from './../../assets/albums/OIP (1).jpeg'
import imgFour from './../../assets/albums/OIP.jpeg'
import imgFIve from './../../assets/albums/pubg-4k-m7d01u319yw5wo0m.jpg'
import { useEffect } from "react";
function Albums()
{
    useEffect(()=>
    {
        let allImages=document.querySelectorAll(".sp-image-album img");
        let imageSources=Array.from(allImages).map((ele)=>
        {
            return ele.getAttribute("src");
        });
        console.log(imageSources)
        let mainImage=document.querySelector(".main-div img");
        let counter=0;
        let imageSliders=document.querySelectorAll(".slider-photos img");
        imageSliders.forEach((ele,index)=>
        {
            ele.onclick=()=>
            {
                counter=index;
                console.log("yes i'm here");
                mainImage.setAttribute("src",imageSources[counter]);
                console.log(index);
                // counter++;
            }
        })
        window.setInterval(()=>
        {
            if(counter==allImages.length-1)
            {
                mainImage.setAttribute("src",imageSources[counter]);
                counter=0;
            }
            else
            {
                mainImage.setAttribute("src",imageSources[counter]);
                counter++;
            }
        },2200)
    },[])
    return <>
     <section className="albums-section" data-aos="fade-down">
    <Title one="Albums" two="And" three="" four="Photos" five=""></Title>
    <div className="albums">
    <div className="one-albums main-div sp-image-album">
    <img src={imgOne} className=""></img>
    </div>
    <div className="two-albums">
    <div className="photo sp-image-album">
    <img src={imgTwo} className=""></img>
    </div>
    <div className="photo sp-image-album">
    <img src={imgThree} className=""></img>
    </div>
    <div className="photo sp-image-album">
    <img src={imgFour} className=""></img>
    </div>
    <div className="photo sp-image-album">
    <img src={imgFIve} className=""></img>
    </div>
    </div>
    </div>
    <div className="slider-photos">
    <img src={imgOne}></img>
    <img src={imgTwo}></img>
    <img src={imgThree}></img>
    <img src={imgFour}></img>
    <img src={imgFIve}></img>
    </div>
    </section> 
    </>
}
export default Albums;
