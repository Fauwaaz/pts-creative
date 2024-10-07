import { blogdata } from "@/assets/data/dummydata";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Title, TitleSm } from "@/app/components/common/Title";
import Banner from "@/app/components/Banner";
import Image from "next/image";

export async function generateStaticParams() {
    return blogdata.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogdata.find((post) => post.slug === params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
            description: 'The requested service could not be found.',
        };
    }

    return {
        title: `${post.title} | Services`,
        description: post.description,
        robots: "index, follow",
    };
}

const SinglePost = ({ params }: { params: { slug: string } }) => {
    const post = blogdata.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
      <section className='post-details bg-top'>
      <div className='container'>
        <div className='heading-title'>
          <TitleSm title={post.date} /> <br />
          <br />
          <Title title={post.title} className='title-bg' />
          <div className='img py'>
            <Image src={post.cover} alt={post.title} width={700} height={500} className='round' />
          </div>
          <div className='desc'>
            <TitleSm title='Phasellus at magna - elit tristique lacinia. Integer a justo vitae arcu fermentum consequat.' />
            <p className='desc-p'> Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper. Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
            <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
            <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
          </div>
        </div>
        <Banner />

        <div className='heading-title'>
          <div className='desc'>
            <TitleSm title='Integer a justo vitae arcu fermentum...' />

            <p className='desc-p'> Phasellus nec tempor neque. In nec finibus lorem, in aliquet risus. Proin elit elit, cursus vel vulputate at, volutpat quis metus. Praesent at blandit tellus.</p>
            <p className='desc-p'>Morbi finibus velit erat, a pulvinar lacus mollis sit amet. Nulla iaculis convallis fermentum. Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper! Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
            <p className='desc-p'>Suspendisse eget elit mauris. Phasellus velit nisi, lobortis quis nisi et, venenatis finibus velit. Integer non nibh eget arcu malesuada ullamcorper.</p>
            <p className='desc-p'>Quisque congue ante in consequat auctor. Morbi ut accumsan eros. Mauris semper suscipit mattis. Cras pellentesque a urna ac dictum. Pellentesque blandit, sapien vel faucibus accumsan, ante dui imperdiet nisi, ut tincidunt nulla tortor nec purus.</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default SinglePost;