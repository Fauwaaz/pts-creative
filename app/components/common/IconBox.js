import Link from "next/link"

const IconBox = ({ data, includes, path }) => {
    return (
        <>
            <div key={data.index} className="pxy">
                <span className="blue">{data.icon} <h3>{data.title}</h3></span>
                <p className="desc">{data.desc}</p>
                <span>
                    <strong>{includes}</strong> 
                    {data.serviceInclude}
                    &nbsp;
                    <Link href={`${path}/${data.slug}`} className="blue">Know More</Link>
                </span>    
            </div>
        </>
    )
}

export default IconBox