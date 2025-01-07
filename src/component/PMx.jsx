import "./PMx.css"
import photo3 from '../assets/PM.png'


function PMx(){
    return(
        <div className="PM"><img src={photo3} alt="" />
        <div className='title4'>PMx</div>
            <div className='details4'><span>India's Biggest Product Competition</span><br /><br />
            PMx is India's largest product case study competion , where <br />
            participants tackle real world challenges through observations,<br />
            analysis and innovation. Experience the product cycle and create<br />
            impactful solutions customers will love.<br />
            </div>
            <div><button className='event-registraion btn4 flex'>Registration Closed</button></div>
        </div>
    )
}
export default PMx;