import './Encode.css'
import photo7 from '../assets/encode.png'

function Internfair(){
    return(
        <div className='IF'>
            <img src={photo7} alt="" />
            <div className='content6'>
            <div className='title6'>ENCODE</div>
            <div className='details6'><span>Real World Problem-solving Hackathon</span><br /><br />
            Encode is a development hackathon where participants solve<br />
            real world challenges with innovative solutions. It focuses on <br />
            creating feasible, user friendly products that address market <br />
            needs. <br />
            </div>
            <div><button className='event-registraion btn6 flex' onClick={() => window.open('https://unstop.com/hackathons/encode-2025-code-to-innovate-udgam-2025-iit-guwahati-1289240', '_blank')}>Register Now ↗</button></div>
            </div>
            
      </div>
    )
}
export default Internfair;