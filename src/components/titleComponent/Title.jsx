;import './title.css';
function Title({one,two,three,four,five})
{
    return <>
           <div className='tours-one' data-aos="fade-down" data-aos-delay="900">
            <h4 style={{fontWeight:"bolder"}}>{one}</h4>
            <h2 style={{margin:"10px 0px"}}>{two} <br></br>{three} <span>{four}</span></h2>
            <p>{five}</p>
        </div>
    </>
}
export default Title;
