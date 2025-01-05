import photo1 from '../assets/Frame 758531681.png';

function Intro() {
    return (
        <div className='card text-center'>
            <div className='flex justify-center'>
                <img src={photo1} alt="UDGAM PASS" />
            </div>
            <div className='quote p-8' style={{fontSize: '1.5rem', fontWeight: '300'}}>
                Unlock the doors to innovation, inspiration and endless opportunities <br />
                your journey into the world of entrepreneurship starts here.
            </div>
        </div>
    );
}

export default Intro;
