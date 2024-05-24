import React from 'react'
import { NavLink } from 'react-router-dom'
import './Blogs.css'
const BlogDetails = ({post}) => {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`} className='no-underline'>
            <span className='titleSent'>{post.title}</span>
        </NavLink>
        <div className='author-categ-date'>
        <p className='author-categ'>
            By <span>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}><p>
            {post.category}
            </p>
            </NavLink>
            </p>
<p>
    Posted on {post.date}
</p>
</div>
<p className='description'>{post.content}</p>
<div className='tagged'>
    {
        post.tags.map((tag,index)=>(
            <NavLink key={index}  to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span >
                    {`#${tag}`}
                </span>
            </NavLink>
        ))
    }
</div>
           
      
    </div>
  )
}

export default BlogDetails