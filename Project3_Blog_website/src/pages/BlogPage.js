import React, { useState,useContext, useEffect  } from 'react'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
// import { baseUrl } from '../baseUrl';
import './BlogPage.css'
import Spinner from '../components/Spinner';
const BlogPage = () => {
    const newbaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog,setBlog]=useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigate();
    const {loading,setLoading}=useContext(AppContext)
    const blogId=location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newbaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
       catch(error){
      alert( "Error in blogId function call"  );
      setBlog(null);
      setRelatedBlogs([]);
       }
       setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])
  return (
    <div className='related-blogs-container'>
<Header/>
<div className='back-btn'>
    <button onClick={()=> navigation(-1)}>
        Back
    </button>
</div>
{
    loading?<Spinner/> :
        blog?(
            <div className='blogs-description'>
                <BlogDetails post={blog}/>
                <div className='releted-blogs'>
                <h2>Related Blogs</h2>
                {
                    relatedBlogs.map((post)=>(
                        <div key={post.id}>
                            <BlogDetails post={post}/>

                        </div>
                    ))
                }
                </div>
            </div>
        ):(<p>No Blogs Found</p>)
    
}
    </div>
  )
}

export default BlogPage