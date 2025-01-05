import "./Disrupt.css"
import photo2 from '../assets/dis.png'

function Disrupt(){
    return(
        <div className="disrupt"><img src={photo2} alt="" />
        <div className='title3'>DISRUPT</div>
            <div className='details3'><span>Pitch Ideas, Win Investments </span><br /><br />
            Disrupt is North-east India's largest pitching battle,offering<br />
            startups the opportunity to pitch ideas investors, VCsand Angels.  <br />
            Finalist receive mentorship ,tools , prizes with winner securing <br />
            investments to scale their ventures<br />
            </div>
            <div><button className='btn3 flex'>Register Now ↗</button></div>
        </div>
    )
}
export default Disrupt;