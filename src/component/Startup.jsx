import "./Startup.css"
import photo4 from '../assets/extra.png'
import photo5 from '../assets/startup.png'

function Startup() {
    return (
        <>
            <div className="startup"><img src={photo5} alt="" /></div>
            <div className="extra"><img src={photo4} alt="" /></div>
            <div className='title2'>STARTUP-EXPO</div>
            <div className='details2'><span className="font-bold">Showcase, Network, Innovate </span><br /><br />
                Startup expo provides a stage for startups to showcase their <br />
                innovations, gather feedback and connect with investors. It  <br />
                fosters entrepreneuurship by promoting collaboration , idea  <br />
                exchange and reserach opportunities in vibrant ecosystem. <br /><br />
            </div>
            <div><button className='event-registraion btn2 flex'>Registration Closed</button></div>
        </>
    )
}
export default Startup;