import Albums from '../albums/Albums';
import Contact from '../contactUs/Contact';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import News from '../News/News';
import Reviews from '../reviews/Reviews';
import Tours from '../tournament/Tournamnet';
import logoImage from './../../assets/logo.png';
import Typed from 'typed.js';
import './layout.css'
import { useContext } from 'react';
import stateContext from '../../context/ContextStateListProvider';
function Layout()
{
    let {listState,setListState}=useContext(stateContext);
    return <>
    <div className='special-one-div-for-nav'>
    <ul>
        <li>  <a href='' className='nav-link'>home</a></li>
        <li> <a href='' className='nav-link'>tournamnet</a></li>
        <li><a href='' className='nav-link'>news</a></li>
        <li>  <a href='' className='nav-link'>albums</a></li>
        <li> <a href='' className='nav-link'>reviews</a></li>
        <li>  <a href='' className='nav-link'>contact</a></li>
    </ul>
    </div>
    <div className='sp-top' style={{position:"fixed"}}>
    <a href='#one'><i class="fa-solid fa-jet-fighter-up"></i></a>
    </div>
    <nav>
    <div className="one-nav">
    <img src={logoImage} className='logo-image'></img>
    </div>
    <div className="two-nav">
    <a href='' className='nav-link'>home</a>
    <a href='' className='nav-link'>tournamnet</a>
    <a href='' className='nav-link'>news</a>
    <a href='' className='nav-link'>albums</a>
    <a href='' className='nav-link'>reviews</a>
    <a href='' className='nav-link'>contact</a>
    </div>
    <div className="three-nav">
    <button className='sp-button-nav'>join Our Team</button>
    <i class="fa-solid fa-bars" style={{fontSize:"x-large",fontWeight:"bolder",marginLeft:"10px"}} onClick={()=>
        {
            let ele=document.querySelector(".special-one-div-for-nav");
            console.log(ele);
            if(!listState)
            {
                ele.style.display="block";
                setListState(true);
            }
            else
            {
                ele.style.display="none";
                setListState(false);
            }
        }
    }></i>
    </div>
    </nav>
    <section className='sections' id='one'>
    <Home></Home>
    <Tours></Tours>
    <News></News>
    <Albums></Albums>
    <Reviews></Reviews>
    <Contact></Contact>
    </section>
    <Footer></Footer>
    </>
}
export default Layout;