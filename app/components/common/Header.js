"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { BsTriangleFill } from "react-icons/bs";
import { subMenu } from "@/assets/data/dummydata";

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header onMouseLeave={() => setShowDropdown(false)} className={`dropdown ${showDropdown ? 'active' : ''}`}>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <Image
                className="pts-logo"
                src='/PTS-Systems-and-Solutions-logo.webp'
                alt="PTS-Systems-and-Solutions-logo"
                quality={100}
                height={100}
                width={100}
                fetchPriority="high"
                priority={true}
                unoptimized={true}
              />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"}>
            <Link href='/' className={activeLink === "/" ? "activeLink" : ""}>Home</Link>
            <Link href='/about' className={activeLink === "/about" ? "activeLink" : ""}>About</Link>
            <div onMouseEnter={() => setShowDropdown(true)}>
              <Link href='#' className={activeLink === "/services" ? "activeLink" : ""}>
                Services <BsTriangleFill size={10} style={{ transform: "rotate(180deg)" }} />
              </Link>
            </div>
            <div>

            </div>
            <Link href='/contact' className={activeLink === "/contact" ? "activeLink" : ""}>Contact Us</Link>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
        {showDropdown && (
          <div className="dropdown-menu"
            onMouseMove={() => setShowDropdown(true)}
          >
            <div className="grid-5">
              {subMenu.map((item, index) => {
                return (

                  <ul key={index}>
                    <li><h3>{item.title}</h3></li>
                    <li><hr style={{marginBottom:"5px"}}/></li>
                    <li>
                      <ul>
                        {item.services.map((subItem, index) => {
                          return (
                            <li key={index}>
                              <Link href={subItem.href}>{subItem.name}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  </ul>
                )
              })}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;