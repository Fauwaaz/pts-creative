"use client";

import Link from "next/link"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"

const TextStyle = {
  fontSize: "16px",
  color: "#fff",
  textTransform: "none",
  marginBottom: "10px"
}

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <Link href="/">
                <h5 style={{ fontWeight: "bold", fontSize: "25px", color: "white", textTransform: "uppercase" }}>PTS Systems & <br /> Solutions Pvt. Ltd.</h5>
              </Link>
              <br />
              <span>
                Get in Touch <br /> Have questions? Interested in our services? We&apos;d love to hear from you!
              </span>
              <br />
              <br />
              <button className="button-primary">Request for quote</button>
            </div>
            <ul>
              <li><h3>COMPANY</h3></li>
              <li>
                <Link href="/about">About agency</Link>
              </li>
              <li>
                <Link href="/services">Showcase</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <ul>
              <li><h3>SERVICES</h3></li>
              <li>
                <Link href="/services/digital-marketing">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services/website-development">Website Development</Link>
              </li>
              <li>
                <Link href="/services/website-design">Website Design</Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services/strategy-and-branding">Strategy & Branding</Link>
              </li>
              <li>
                <Link href="/services/cloud-hosting">Cloud Hosting</Link>
              </li>
              <li>
                <Link href="/services/web-hosting">Web Hosting</Link>
              </li>
              <li>
                <Link href="/services/agile-methodology">Agile Methodology</Link>
              </li>
            </ul>
            <ul>
              <li><h3>CONNECT</h3></li>
              <div className="connect">
                <ul>
                  <li>
                    <Link href="/">
                      <BsFacebook size={25} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <AiFillInstagram size={25} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <AiFillYoutube size={25} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <AiFillLinkedin size={25} />
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="tel:+919136477352"><h5 style={TextStyle}>+91 9136477352</h5></Link>
              <Link href="mailto:info@ptssystems.co.in"><h5 style={TextStyle}>info@ptssystems.co.in</h5></Link>
              <p style={{ fontSize: "14px", marginBottom: "10px" }}>Address: Unit 1, Building, no. 2, Millenium Business Park, MIDC Industrial Area, Sector 1, Mahape, Navi Mumbai, Maharashtra 400710</p>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© {year} PTS SYSTEMS & SOLUTIONS. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="connect">
              <span>PRIVACY POLICY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer