import React,{useContext} from 'react'

import BlogDetails from './BlogDetails';
import { AppContext } from '../context/AppContext';
import './Blogs.css';
import Spinner from './Spinner';
const Blogs = () => {
    const {posts,loading}=useContext(AppContext);
  return (
    <div className='blog-content'>
        {
            loading?(<Spinner/> ): 
                posts.length===0?(
                    <div>
                        <p>
                            No Posts Found
                        </p>
                    </div>
                ):
                (posts.map((post)=> (
                    <BlogDetails key={post.id} post={post}/>
                )))
            
        }
    </div>
  )
}

export default Blogs