import React from 'react'
import { useLocation } from 'react-router-dom'
import Template from './Template';
const TagPage = () => {
    const location = useLocation();
    const tag =location.pathname.split("/").at(-1);
  return (
    <div>
<Template identity={tag}/>
    </div>
  )
}

export default TagPage