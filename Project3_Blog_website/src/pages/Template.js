import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import './Template.css'

const Template = ({identity}) => {
    const navigation =useNavigate();
    const location=useLocation();
  console.log("In Template category:",identity);
  return (
    <div>
        <Header/>

       <div className='tagged-category-blogs'>
{ identity!=="" &&
        <div className='btn-catg'>
           <button onClick={()=>navigation(-1)}>
            Back
           </button>
           <h2>
            Blogs on <span>{identity}</span>
           </h2>
        </div>
}
</div> 
<div  className={identity==""?"home-blogs":"tag-category-blogs"}>
<Blogs/>
</div>
       
        <Pagination/>
    </div>
  )
}

export default Template