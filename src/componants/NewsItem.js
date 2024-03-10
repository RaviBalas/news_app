import React from 'react'

export default function NewsItem(props) {

        let { title, description, imageUrl, newsUrl,publishedAt,author,source } = props
        return (
        <><div className="card my-2" style={{ backgroundColor: "#dad2d2" }}>
                     <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:"90%"}}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt={imageUrl} />
                    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-md btn-dark">Read More</a>
                        <p className="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                    </div>
                </div>
            </>
        )
    }