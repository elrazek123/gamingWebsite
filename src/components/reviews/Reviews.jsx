import Title from "../titleComponent/Title";
import imgPerson from './../../assets/albums/person.webp';
import './reviews.css'
import { useEffect } from "react";
import imgTwo from './../../assets/albums/Kilian_PURE_SQUARE-scaled.jpg';
import imgThree from './../../assets/albums/pexels-pixabay-220453.jpg';

function Reviews()
{
    useEffect(()=>
    {
        const allReviwesSection=document.querySelectorAll(".feedBack");
        allReviwesSection[0].style.left="0px";
        let allIcons=document.querySelectorAll(".continers-circle");
        allIcons.forEach((ele,index)=>
        {
            ele.onclick=()=>
            {
              console.log("clicked");
              ele.firstElementChild.style.display="block";
              allIcons.forEach((ele2,index2)=>
            {
                if(index==index2)
                {
                    console.log("continue");
                }
                else
                {
                    ele2.firstElementChild.style.display="none";
                }
            });
            allReviwesSection.forEach((ele3,index4)=>
                {
                    ele3.style.left="-100%";
                });
                allReviwesSection[index].style.left="0px";
            }
         

        })

    },[])
    return <>
    <section className="reviews">
    <Title   three="feedBack" four="of our" five="customers" ></Title>
    <div className="container-feedBack-Slider" data-aos="fade-down" data-aos-delay="2000">
        <div className="feedBack">
        <img src={imgPerson}></img>
        <h3>Eng.Ahmed hesham</h3>
        <p>this is the best gaming website i have ever used</p>
        </div>
        <div className="feedBack">
        <img src={imgTwo}></img>
        <h3>Eng.mohamed abd elaleem</h3>
        <p>this is the best gaming website i have ever used</p>
        </div>
        <div className="feedBack">
        <img src={imgThree}></img>
        <h3>Eng.mohamed programmer from me</h3>
        <p>this is the best gaming website i have ever used</p>
        </div>
    </div>
    <div className="reviewSlider">
    <div className="continers-circle" style={{position:"relative"}}>
    <div className="inner-div">
    </div>
    </div>
      <div className="continers-circle" style={{position:"relative"}}>
      <div className="inner-div">
    </div>
    </div>
    <div className="continers-circle" style={{position:"relative"}}>
    <div className="inner-div">
    </div>
    </div>
    </div>
    </section>
    </>
}
export default Reviews;
// position:"absolute",width:"4px",height:"4px",borderRadius:"50%",color:"black",left:"10%",top:"10%"