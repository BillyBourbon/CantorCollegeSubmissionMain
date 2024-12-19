'use client'
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const Home = () => {
  const imageSrcs = [ "cantorLobby.webp","cantorLectureTheatre3.webp","cantorLectureTheatre11.jpg", "cantorBuildingLobby.webp", "cantorAtrium4.webp", "cantor4.webp"]
  const [count, setCount] = useState(0)
  const [reverse, setReverse] = useState(false)
  
  useEffect(() => {
    const wrapper = document.getElementById("imageScrollerWrapper")
    const interval = setInterval(() => {
      if(count == wrapper.scrollWidth - wrapper.clientWidth) setReverse(true)
      if(count == 0) setReverse(false)
      reverse ? setCount(count-1) : setCount(count+1)
      
      wrapper.scrollTo(count,0)
    }, 10);
    return () => clearInterval(interval)
  },[reverse, count])
  
  return(
  <div className="home">
    <h1>Welcome To Cantor College</h1>
    <br></br>
    <div className="imageScrollerWrapper" id="imageScrollerWrapper">
      {imageSrcs.map((imgSrc, i) => (<Image className="imageScrollerImage" src={`/images/homepage/${imgSrc}`} key={i} width={400} height={400}  alt="Cantors Lobby And Leacture Theatres"/>))}
    </div>
    <br></br>
  </div>
  )
}

export default Home