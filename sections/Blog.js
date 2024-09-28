import BlogCard from "../app/components/BlogCard"
import { Title, TitleSm } from "../app/components/common/Title"


const Blog = () => {
  return (
    <>
    <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Our Views On Marketing, Design & Technology' className='title-bg'/>
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
