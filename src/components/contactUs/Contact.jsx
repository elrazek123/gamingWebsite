import './contact.css';
import myLogo from './../../assets/logo.png'
function Contact()
{
    return <>
    <section className='contact-use-section'>
    <div className='div-contact'>
    <img src={myLogo}></img>
    <p>out success is out wite to make it to make thois for our helps</p>
    <div className='icons-contact'>
    <i class="fa-brands fa-facebook icons-cont"></i>
    <i class="fa-brands fa-youtube icons-cont"></i>
    <i class="fa-brands fa-linkedin icons-cont"></i>
    <i class="fa-brands fa-square-x-twitter icons-cont"></i>
    </div>
    </div>
    <div className='div-contact'>
    <div className='sp-contact'>
        <h3>UseFull links</h3>
        <div className='line-contact'>

        </div>
    </div>
    <ul>
        <li>Tournamtes</li>
        <li>Helps center</li>
        <li>Privacy and Policy</li>
        <li>Terms of use</li>
        <li>Contact us</li>
    </ul>
    </div>
    <div className='div-contact'>
    <div className='sp-contact'>
        <h3>Contact Us:</h3>
        <div className='line-contact'>
        </div>
    </div>
    <div>
    <h4>LOCATION</h4>
    <p>tanta , 23 square street elghrabia egypt</p>
    </div>
    <div>
    <h4>JOIN US</h4>
    <p>info@gmail.com</p>
    </div>
    <div>
    <h4>PHONEl:</h4>
    <p>(+20)1092010561</p>
    </div>
    </div>
    <div className='div-contact'>
    <div className='sp-contact'>
        <h3>Newsletter SignUp:</h3>
        <div className='line-contact'>
        </div>
    </div>
    <input type='text' className='sp-input-contact' placeholder='enter your email:'></input>
    <button>Subscribe Now</button>
    </div>
    </section>
    </>
}
export default Contact;
