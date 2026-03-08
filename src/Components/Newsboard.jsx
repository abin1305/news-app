import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';


const Newsboard = ({category}) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then((response)=>response.json()).then((data)=> setArticles(data.articles || []));

    }, [category])
  return (
    <div className="px-5">
        <h2 className='text-center mt-4  '>latest <span className='badge bg-danger text-light'>news</span></h2>
    {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} description={news.description} imageUrl={news.urlToImage} newsUrl={news.url}/>

    })}
    </div>
  )
}

export default Newsboard