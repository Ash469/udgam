import './DFrame.css'
import photo9 from '../assets/dframe.png'

function Internfair(){
    return(
        <div className='IF'>
            <img src={photo9} alt="" />
            <div className='content8'>
            <div className='title8'>DFRAME</div>
            <div className='details8'><span>Redefine The Design </span><br /><br />
            DFrame is a unique UI/UX & Visual Identity competition focused <br />
            on blending creativity with business needs. It challenges <br />
            designers to create user-centric solutions that solve <br />
            real-world problems while showcasing their innovation. <br />
            </div>
            <div><button className='event-registraion btn8 flex'>Register Now ↗</button></div>
            </div>
            
      </div>
    )
}
export default Internfair;