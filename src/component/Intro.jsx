import './Intro.css';
import photo1 from '../assets/Frame 758531681.png'
function Intro(){
    return(
        <div className='card text-center'>
            <img src={photo1} alt="UDGAM PASS" className='mx-auto' />
            <div className='quote mt-8 mb-12'>Unlock the doors to innovation, inspiration and endless opportunities <br />
            your journey into the world of entrepreneurship starts here. </div>
        </div>
    )
}
export default Intro;
