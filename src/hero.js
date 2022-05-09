import {AiOutlinePlaySquare} from 'react-icons/ai'
const Hero = () => {
    return ( 
        <div className="hero-section">
            <video src="./videos/video-2.mp4" loop autoPlay muted></video>
            <div className="hero-element">
                <h1>ماجراجویی منتظر شماست</h1>
                <h2>منتظر چه هستید؟</h2>
                <div className="hero-btn">
                    <div className="btn-left">بزن بریم</div>
                    <div className="btn-right">تماشای تریلر <AiOutlinePlaySquare className="play-icon"/></div>
                </div>

            </div>



        </div>
     );
}
 
export default Hero;