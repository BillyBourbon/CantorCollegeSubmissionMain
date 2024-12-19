'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
const AboutUs = () => {
  let title = "About Cantor College"
  let text = `Cantor College was established in 1989 to specialize in Computing and Design.   At Cantor College, we want to give students the education they need to achieve their career aims, leaving them equipped with the knowledge, skills and experience to succeed. Cantor College gives you the opportunities that can give you the edge when you enter the world of work, through our teaching and our links to some of the world's leading researchers and employers. Our students have gone on to successful careers in a wide range of industries across the globe.  Whatever your ambitions, our learning and support can help to get the most out of your time with Cantor College, both as a student and in your future career.`
  let [count, setCount] = useState(0)
  let images = ["cantorBuildingOne.jpeg", "cantorBuildingTwo.jpg", "cityMap.jpg", "welcomeToSheffield.jpeg", "groupworkOne.jpeg", "groupworkTwo.jpeg", "groupworkThree.jpeg"]

  if(count >=images.length) setCount(0)
  
  // Below url links to the site where i found this snippet that explains how to use setInterval in a react component as when i used setInterval 
  // on its own i experienced timing issues and the images didnt update according to the interval
  // https://www.geeksforgeeks.org/how-to-use-setinterval-method-inside-react-components/
  useEffect(()=>{
    let interval = setInterval(() => {
      setCount(count+1)
    }, 10000);
    return () => clearInterval(interval)
  }, [count])

  return(
  <>
    <div className="aboutUs">
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
    <br></br>
    <div>
      {
        <Image
        src={`/images/aboutUs/${images[count]}`}
        alt=""
        width={400}
        height={400}
        objectFit="cover"
        className="imageSlide"
        />
      }
    </div>
  </>
  )
}

export default AboutUs
