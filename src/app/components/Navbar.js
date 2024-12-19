'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
const Navbar = () => {
  const pages = [
    {link: "/", title: "Home"},
    {link: "/about_us", title: "About Us"},
    {link: "/how_to_find_us", title: "How To Find Us"},
    {link: "/computing_courses", title: "Computing Courses"},
    {link: "/design_courses", title: "Design Courses"},
    {link: "/facilities", title: "Facilities"},
    {link: "/learning_resources", title: "Learning Resources"},
    {link: "/infomation_for_staff", title: "Infomation For Staff"},
    {link: "/infomation_for_students", title: "Infomation For Students"},
    {link: "/working_with_business", title: "Working With Business"},
    {link: "/contact_us", title: "Contact Us"},
  ]
  const [menuState, setMenuState] = useState(false)
  const [fixed, setFixed] = useState(0)
  
  const navbarButton = () => {setMenuState(!menuState)}
  
  useEffect(()=>{
    const setScrollY = () => {setFixed(window.scrollY)}
    window.addEventListener("scroll",setScrollY)
    return () => {window.removeEventListener("scroll",setScrollY)}
  },[])
  
  return(
  <div className="navbar"  style={fixed >= 120 ? {position:"fixed",top:"0px"} : {position:"relative"}}>
  
    <div className='logoBox'>
      <Link href="/"><Image
        src = "/images/logo.png"
        width={50}
        height={50}
        alt='Cantor College Logo'
        className='logo'
      /></Link>
    </div>
    
    <button className='navbarButton' onClick={navbarButton}>&#8801;</button>
    
    <div className="navbarMenuLinks" style={menuState ? {display:"block"} : {display:"none"}} onClick={navbarButton}>
      {
        pages.map((page, i)=>(<li key={i}><Link href={page.link}>{page.title}</Link></li>))
      }        
    </div>
  
  </div>
  )
}

export default Navbar