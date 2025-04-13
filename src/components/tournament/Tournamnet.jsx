import './tournamnet.css';
import teamImage from '../../assets/team-logo-1.png';
import image2 from './../../assets/team-logo-2.png';
import image3 from './../../assets/team-logo-3.png';
import image4 from './../../assets/team-logo-4.png';
import image5 from './../../assets/team-logo-5.png';
import image6 from './../../assets/team-logo-6.png';
import Title from './../titleComponent/Title';

function Tours()
{
    return <>
    <div className="tournaments" data-aos="fade-down" data-aos-delay="300">
        {/* <div className='tours-one'>
            <h4 style={{fontWeight:"bolder"}}>UPCOMING MATCHS</h4>
            <h2 style={{margin:"10px 0px"}}>BATTLES EXTREME <br></br>MASTERS <span>TOURNAMENT</span></h2>
            <p>our seucess from ours thre eis now and then you want ot me and then calling</p>
        </div> */}
        <Title one="UPCOMING MATCHS" two="BATTLES EXTREME" three="MASTERS" four="TOURNAMENT" five="our seucess from ours thre eis now and then you want ot me and then calling"></Title>
        <div className="matches">
        <article data-aos="fade-up" className='match'>
        <div className='part-one' data-aos="fade-right" data-aos-delay="1200">
        <div className='special-div-for'>
            <h3>PURBLE DEATH <br></br>CADETS</h3>
            <img className='special-image-match' src={teamImage}></img>
            <div className='special-desc'>
                <p>GROUP 4|MATCH 06TH</p>
            </div>
        </div>
        </div>
        <div className='vs' data-aos="fade-up" data-aos-delay="800">
        <h3>10:00</h3>
        <h5>tues 04 may ,2025</h5>
        <div className='icons-match'>
        <i class="fa-solid fa-message"></i>
        <i class="fa-solid fa-message"></i>
        </div>
        </div>
        <div className='part-two' data-aos="fade-left" data-aos-delay="1000">
        <div className='special-div-for-dif'>
            <h3>PURBLE DEATH <br></br>CADETS</h3>
            <img className='special-image-match-dif' src={image2}></img>
            <div className='special-desc-dif'>
                <p>GROUP 4|MATCH 06TH</p>
            </div>
        </div>
        </div>
        </article>
        <article data-aos="fade-up" className='match'>
        <div className='part-one' data-aos="fade-right" data-aos-delay="1200">
        <div className='special-div-for'>
            <h3>PURBLE DEATH <br></br>CADETS</h3>
            <img className='special-image-match' src={image3}></img>
            <div className='special-desc'>
                <p>GROUP 4|MATCH 06TH</p>
            </div>
        </div>
        </div>
        <div className='vs'>
        <h3>10:00</h3>
        <h5>tues 04 may ,2025</h5>
        <div className='icons-match'>
        <i class="fa-solid fa-message"></i>
        <i class="fa-solid fa-message"></i>
        </div>
        </div>
        <div className='part-two' data-aos="fade-left" data-aos-delay="1000">
        <div className='special-div-for-dif'>
            <h3>PURBLE DEATH <br></br>CADETS</h3>
            <img className='special-image-match-dif' src={image4}></img>
            <div className='special-desc-dif'>
                <p>GROUP 4|MATCH 06TH</p>
            </div>
        </div>
        </div>
        </article>
        <article data-aos="fade-up" className='match'>
        <div className='part-one' data-aos="fade-right" data-aos-delay="1200">
        <div className='special-div-for'>
            <h3>PURBLE DEATH <br></br>CADETS</h3>
            <img className='special-image-match' src={image5}></img>
            <div className='special-desc'>
                <p>GROUP 4|MATCH 06TH</p>
            </div>
        </div>
        </div>
        <div className='vs'>
        <h3>10:00</h3>
        <h5>tues 04 may ,2025</h5>
        <div className='icons-match'>
        <i class="fa-solid fa-message"></i>
        <i class="fa-solid fa-message"></i>
        </div>
        </div>
        <div className='part-two' data-aos="fade-left" data-aos-delay="1000">
        <div className='special-div-for-dif'>
            <h3>PURBLE DEATH <br></br>CADETS</h3>
            <img className='special-image-match-dif' src={image6}></img>
            <div className='special-desc-dif'>
                <p>GROUP 4|MATCH 06TH</p>
            </div>
        </div>
        </div>
        </article>
        </div>
    </div>
    </>
}
export default Tours;