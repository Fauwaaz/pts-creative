import { Title, TitleSm } from '@/app/components/common/Title'
import { services } from '@/assets/data/services'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'

export async function generateStaticParams() {
  return services.map((service) => ({
      slug: service.slug,
  }));
}

export async function generateMetadata() {
  return {
    title: 'Categories | Services',
    description: 'Our services categories',
  }
}

const Categories = () => {
  return (
    <section className='heading-title container'>
        <TitleSm title="CATEGORIES" />
        <div className='py'>
            <Title title="Navigate Services" className="title" />
            <br />
            <Link href="/services" className='button-secondary'>To Services &nbsp; <HiOutlineArrowUpRight /></Link>
        </div>
    </section>
  )
}

export default Categories