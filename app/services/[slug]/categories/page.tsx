import { Title, TitleSm } from '@/app/components/common/Title'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

const Categories = () => {
  return (
    <section className='heading-title container'>
        <TitleSm title="CATEGORIES" />
        <div className='py'>
            <Title title="Navigate Services" className="title" />
            <br />
            <Link href="/services" className='button-primary'>To Services &nbsp; <HiOutlineArrowUpRight /></Link>
        </div>
    </section>
  )
}

export default Categories