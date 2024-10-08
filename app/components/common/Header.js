"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import Image from "next/image"

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
              <Image className="pts-logo"
                src='/PTS-Systems-and-Solutions-logo.webp'
                alt="PTS-Systems-and-Solutions-logo"
                quality={100}
                height={100}
                width={100}
                fetchPriority="high"
                priority={true}
                unoptimized = {true} 
              />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>Home</Link>
            <Link href='/about' className={activeLink == "/agency" ? "activeLink" : "none"}>About</Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>Services</Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>Contact Us</Link>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header