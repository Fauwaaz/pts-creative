"use client";

import { Title, TitleSm } from "@/app/components/common/Title"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's Start Right Now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+91 9136477352</h3>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Mumbai</h3>
                  <span>Milennium Business Park</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@ptssystems.co.in</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@ptssystems.co.in</h3>
                  <span>Careers</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                    <Link href="#"><BsFacebook size={25} /></Link>
                </li>
                <li className='icon'>
                    <Link href="#"><AiFillBehanceCircle size={25} /></Link>
                </li>
                <li className='icon'>
                  <Link href="#"><AiFillInstagram size={25} /></Link>
                </li>
                <li className='icon'>
                  <Link href="#"><AiFillLinkedin size={25} /></Link>
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <h3 style={{fontSize: "30px", fontWeight: "600", letterSpacing:"2px"}}>Make an online enquiry</h3>
              <p className='desc'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

             <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact