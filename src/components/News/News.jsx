import Title from '../titleComponent/Title';
import './news.css';
import imgOne from './../../assets/news-1.jpg';
import imgTwo from './../../assets/news-2.jpg';
import imgThree from './../../assets/news-3.jpg';

function News()
{
    return <>
    <section className='news-section'>
    <Title one="WHAT'S ON OUR MIND" two="NEWS AND" three="SUCCESS" four="HEADLINES" five="our success is one of whta we willl choose to continue success to our final target"></Title>
    <div className='all-news'>
    <article className='new-article' data-aos="fade-left" data-aos-delay="1200">
    <div className='container-img-new'>
        <img src={imgOne} className='newImage'></img>
        <div className='special-for-image'>
            <p>PUBJ</p>
        </div>
    </div>
    <div className='two-new'>
    <div className='icons-new'>
    <div className='one-icon-new'>
    <i class="fa-solid fa-calendar"></i>
    <p>Jan 2025</p>
    </div>
    <div className='two-icon-new'>
    <i class="fa-solid fa-user"></i>
    <p>ahmed hesham</p>
    </div>
    </div>
    <h3>Innoviate Business aLL Over</h3>
    <h3>the world.</h3>
    <p>financial world from me up to then and it will oevr uou for all this you can do it easily by our website.</p>
    <div className='final-of-new'>
        <div className='sp-for-new'>
        </div>
        <a>READ MORE</a>
    </div>
    </div>
    </article>
    <article className='new-article' data-aos="fade-left" data-aos-delay="1200">
    <div className='container-img-new'>
        <img src={imgTwo} className='newImage'></img>
        <div className='special-for-image'>
            <p>PUBJ</p>
        </div>
    </div>
    <div className='two-new'>
    <div className='icons-new'>
    <div className='one-icon-new'>
    <i class="fa-solid fa-calendar"></i>
    <p>Jan 2025</p>
    </div>
    <div className='two-icon-new'>
    <i class="fa-solid fa-user"></i>
    <p>ahmed hesham</p>
    </div>
    </div>
    <h3>Innoviate Business aLL Over</h3>
    <h3>the world.</h3>
    <p>financial world from me up to then and it will oevr uou for all this you can do it easily by our website.</p>
    <div className='final-of-new'>
        <div className='sp-for-new'>
        </div>
        <a>READ MORE</a>
    </div>
    </div>
    </article>
    <article className='new-article' data-aos="fade-left" data-aos-delay="1200">
    <div className='container-img-new'>
        <img src={imgThree} className='newImage'></img>
        <div className='special-for-image'>
            <p>PUBJ</p>
        </div>
    </div>
    <div className='two-new'>
    <div className='icons-new'>
    <div className='one-icon-new'>
    <i class="fa-solid fa-calendar"></i>
    <p>Jan 2025</p>
    </div>
    <div className='two-icon-new'>
    <i class="fa-solid fa-user"></i>
    <p>ahmed hesham</p>
    </div>
    </div>
    <h3>Innoviate Business aLL Over</h3>
    <h3>the world.</h3>
    <p>financial world from me up to then and it will oevr uou for all this you can do it easily by our website.</p>
    <div className='final-of-new'>
        <div className='sp-for-new'>
        </div>
        <a>READ MORE</a>
    </div>
    </div>
    </article>
    <article className='new-article' data-aos="fade-left" data-aos-delay="1200">
    <div className='container-img-new'>
        <img src={imgOne} className='newImage'></img>
        <div className='special-for-image'>
            <p>PUBJ</p>
        </div>
    </div>
    <div className='two-new'>
    <div className='icons-new'>
    <div className='one-icon-new'>
    <i class="fa-solid fa-calendar"></i>
    <p>Jan 2025</p>
    </div>
    <div className='two-icon-new'>
    <i class="fa-solid fa-user"></i>
    <p>ahmed hesham</p>
    </div>
    </div>
    <h3>Innoviate Business aLL Over</h3>
    <h3>the world.</h3>
    <p>financial world from me up to then and it will oevr uou for all this you can do it easily by our website.</p>
    <div className='final-of-new'>
        <div className='sp-for-new'>
        </div>
        <a>READ MORE</a>
    </div>
    </div>
    </article>
    </div>
    </section>
    </>
}
export default News;
