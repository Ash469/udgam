import './CC.css'
import photo6 from '../assets/CC.png'

function CC(){
    return(
        <div className='CC'>
            <img src={photo6} alt="" />
            <div className='content5'>
            <div className='title5'>COSMIC CLASH</div>
            <div className='details5'><span>Unique Tech Innovation Challenge</span><br /><br />
            Cosmic Clash challenges participants to bring technical innovation <br />
            with a creative edge. Tackle complex and develop innovative <br />
            solutions that bridge technology and human needs.<br />
            </div>
            <div><button className='event-registraion btn5 flex'>Coming Soon</button></div>
            </div>
            
      </div>
    )
}
export default CC;