import React from 'react'
import image from '../assets/news.jpg'
const Newsitem = ({title, description, imageUrl, newsUrl}) => {
  return (
   
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2 " style={{maxWidth: "380px"}}>
  <img src={imageUrl?imageUrl:image} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,40)}</h5>
    <p className="card-text">{description?description.slice(0,90):' An immigration enforcement campaign is underway in Maine, a state that is home to a sizabl'}</p>
    <a href={newsUrl} className="btn btn-primary">Read More</a>
  </div>
</div>

   
  )
}

export default Newsitem