import { blogdata } from "@/assets/data/dummydata";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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
        <div className="container">
            <Image 
                className="rounded-lg"
                src={post.cover}
                width={600}
                height={450}
                alt={post.title}
                unoptimized={true}
            />
            <h1 className="">{post.title}</h1>
            {post.description}
        </div>
    );
};

export default SinglePost;