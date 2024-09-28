"use client"

import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title='creative' caption='PTS' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>Home</Link>
            <Link href='/about' className={activeLink == "/agency" ? "activeLink" : "none"}>About</Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>Services</Link>
            <Link href='/blogs' className={activeLink == "/team" ? "activeLink" : "none"}>Blog</Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>Team</Link>            
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>Contact Us</Link>
            <button className='button-primary'>book a demo</button>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header