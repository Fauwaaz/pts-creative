"use client";

import Link from "next/link"
import Image from "next/image"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"
// import { motion, useInView } from "framer-motion"
// import { useRef } from "react"

const Card = ({ data, caption, show, path }) => {
  // const ref = useRef(null)
  // const isInView = useInView(ref, { triggerOnce: false })
  return (
    <>
        <div 
                // ref={ref}
                // initial={{ opacity: 0, scale: 0.8, y: 50 }}
                // animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
                // transition={{ duration: 0.5 }}
          >
          <div className='card'>
              <Link href={`${path}/${data.slug}`} className='card-img'>
                <Image
                  src={data.cover}
                  alt={data.title}
                  width={130}
                  height={130}
                  quality={100}
                  unoptimized = {true}
                />
              </Link>
            <div 
              className='card-details'
            >
              <Link href={`${path}/${data.slug}`} className='title-link'>
                <TitleSm title={data.title} />
              </Link>
                {caption && ( 
                <Link href={`${path}/${data.slug}`}>
                  {caption} <HiOutlineArrowRight className='link-icon' />
                </Link>
                )}
              <div className='flex'>
                <span> {data.category} {data.post}</span> {data.date && <span> / {data.date}</span>}
              </div>

              {show && (
                <div>
                  {data.desc.map((text, i) => (
                    <p key={i} className="desc"> - {text.text}</p>
                  ))}
                </div>
              )}
            </div>
          </div>    
        </div>
    </>
  )
}

export default Card
