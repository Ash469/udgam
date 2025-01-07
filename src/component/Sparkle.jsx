import './Sparkle.css'
import photo8 from '../assets/sparkle.png'

function Internfair(){
    return(
        <div className='IF'>
            <img src={photo8} alt="" />
            <div className='content7'>
            <div className='title7'>SPARKLE</div>
            <div className='details7'><span>Teen Pitching Spotlight</span><br /><br />
            Sparkle is a pitching platform for school students to showcase  <br />
            their entrepreneurial ideas.Teenagers get an opportunity to<br />
            present their startups to a panel of Angel and VCs,<br />
            fostering the entrepreneurial spirit from a young age <br />
            
            </div>
            <div><button className='event-registraion btn7 flex'>Registration Closed</button></div>
            </div>
            
      </div>
    )
}
export default Internfair;