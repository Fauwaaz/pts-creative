import { blogdata } from "@/assets/data/dummydata"

const SinglePost = ( 
  {
    params
  } : {
  params: {slug: string, cover: string}
}) => {
  return (
    <>
      <div>Blog: {params.slug}</div>
    </>
  )
}

export default SinglePost
