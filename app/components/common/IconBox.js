const IconBox = ({ data, includes }) => {
    return (
        <>
            <div key={data.index} className="Iconbox">
                <span className="blue">{data.icon} <h3>{data.title}</h3></span>
                <p className="desc">{data.desc}</p>
                <span>
                    <strong>{includes}</strong> 
                    {data.serviceInclude}
                </span>
            </div>
        </>
    )
}

export default IconBox