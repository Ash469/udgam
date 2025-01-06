import { useState, useEffect, useRef } from 'react'
import Logo from '../assets/udgam.png'
import backgroundVideo from '../assets/video.webm'
import './hero.css'

function Start() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Start logo animation
    const animationTimer = setTimeout(() => {
      setIsVisible(true)
    }, 500) // Delay to start the logo animation

    // Start video playback after animation is complete
    const videoTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 2000) // Match with the duration of the logo animation

    return () => {
      clearTimeout(animationTimer)
      clearTimeout(videoTimer)
    }
  }, [])

  return (
    <div className='videoContainer' style={{ position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <video
        ref={videoRef}
        playbackRate={0.5}
        muted
        className="background-video"
      >
        <source src={backgroundVideo} type="video/webm" />
      </video>
      
      <div className="logo-container">
        <img 
          src={Logo} 
          alt="Logo" 
          className={`logo ${isVisible ? 'visible' : ''}`} 
        />
      </div>
    </div>
  )
}

export default Start
