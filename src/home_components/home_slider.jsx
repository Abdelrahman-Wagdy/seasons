import video from './video1.mp4';
import audio from './audio1.mp3';
const HSlider = () => {
    const playVideo = () =>{
        document.querySelector(".videoBackground").requestFullscreen();
        document.querySelector(".videoBackground").play();
        document.getElementById('audio1').play();
        document.querySelector(".videoBackground").controls();

    }
    return (  
        <div className="slider section">
            <video className='videoBackground' width={`100%`} src={video} type="video/mp4" autoPlay={'autoplay'} muted = {'muted'} loop = {'loop'}></video>
            <div className="cover-layer"></div>
            <audio id='audio1' src={audio} type="audio/mp3"></audio>
            <i className="far fa-play-circle play_button-icon" onClick={playVideo}></i>
        </div>
    );
}
 
export default HSlider;