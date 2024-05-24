import React from 'react'
import { useLocation } from 'react-router-dom'
import Template from './Template';

const CategoryPage = () => {
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
    console.log("Category:",category);
  return (
    <div>
<Template identity={category}></Template>
    </div>
  )
}

export default CategoryPage