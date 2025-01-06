import './Internfair.css'
import photo1 from '../assets/Internfair.png'

function Internfair(){
    return(
        <div className='IF'>
            <img src={photo1} alt="" />
            <div className='content1'>
            <div className='title1'>INTERNFAIR</div>
            <div className='details1'><span>Unlock indusrty parternship </span><br /><br />
            Internfair is a platform exclusively for IIT Guwahati students, offfering  <br />
            internships in diverse profiles like software development, analytics,  <br />
            and product management. It helps students gain industry exposure and  <br />
            prepares them for upcoming placements and internships <br /><br />
            </div>
            <div><button className='btn flex' onClick={() => window.open('https://unstop.com/p/intern-fair-your-gateway-to-internships-iit-guwahati-1331100', '_blank')}>Register Now ↗</button></div>
            </div>
            
      </div>
    )
}
export default Internfair;