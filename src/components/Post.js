import React from 'react'
import Image from "gatsby-image"
import {Link} from "gatsby"


const Post = ({post:{mainImage,slug,title,description,createdAt}}) => {
    return (
        <article className="post">
            <Link to={`/${slug}` } className="post-inner">
                <Image fluid={mainImage.fluid} className="post-image"/>
                <div className="post__info">
                    <h2 className="post__info-title">
                        {title}
                    </h2>
                    <p>{description.childMdx.excerpt}</p>
                <button className="post-btn">Read More</button>
                </div>

            </Link>
            <h4 className="post-date">{createdAt}</h4>
        </article>
    )
}

export default Post
