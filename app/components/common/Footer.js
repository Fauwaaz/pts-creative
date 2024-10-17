"use client";

import Link from "next/link"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { services } from "@/assets/data/services";

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
              <Link href="/contact" className="button-primary">Request for quote</Link>
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
              {services.map((item, index) => {
                const href = `/services/${item.slug}`;

                return (
                  <li key={index}>
                    <Link href={href}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
            <ul>
              <li><h3>CONNECT</h3></li>
              <li>
                <ul className="connect text-center">
                  <li>
                    <Link href="#">
                      <BsFacebook size={25} />
                      <span style={{ fontSize: "10px !important" }}>Facebook</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <AiFillInstagram size={25} />
                      <span style={{ fontSize: "10px !important" }}>Instagram</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" >
                      <AiFillYoutube size={25} />
                      <span style={{ fontSize: "10px !important" }}>Youtube</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <AiFillLinkedin size={25} />
                      <span style={{ fontSize: "10px !important" }}>LinkedIn</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="tel:+919136477352"><h4 style={TextStyle}>+91 9136477352</h4></Link>
                <Link href="mailto:info@ptssystems.co.in"><h5 style={TextStyle}>info@ptssystems.co.in</h5></Link>
                <p style={{ fontSize: "14px", marginBottom: "10px" }}>Address: Unit 1, Building, no. 2, Millenium Business Park, MIDC Industrial Area, Sector 1, Mahape, Navi Mumbai, Maharashtra 400710</p>
              </li>
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