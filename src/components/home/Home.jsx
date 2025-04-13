import './home.css';
import pubjImage from './../../assets/hero-banner.png'
import { useEffect } from 'react';
import Typed from 'typed.js';
function Home()
{
    useEffect(()=>
    {
        const typedGet=new Typed("#yy",{
            strings:["Gamers","Uesrs"],
            typeSpeed:50,
            backSpeed:55,
            loop:true,
            showCursor:false,
        })
    },[])
    return <>
    <header>
        <div className='special-header' style={{textAlign:"center"}}>
        <img src={pubjImage} className='pubj-image' ></img>
        </div>
        <div className='header-content' style={{height:"100vh"}}>
            <h4 style={{margin:"5px 0px"}}>ENJOY THE GAMES</h4>
            <h1 style={{textAlign:"center",margin:"5px 0px"}}>EPIC GAMES  MADE FOR <br></br> TRUE <span id="yy" style={{color:"#9841ff"}}></span> </h1>
            <button style={{display:'inline-block',margin:"10px 0px",marginBottom:"200px"}}>Join With Us</button>
        </div>
    </header>
    </>
}
export default Home;