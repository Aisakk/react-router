import { useEffect, useState } from "react";
import CardPicture from "../component/CardPicture";
import HeaderNavBar from "../component/HeaderNavBar";
import getDataComics from '../services/marvel_api';

let header = {
    title: 'Marvel',
    url: 'https://www.komar.de/en/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg',
    alt: 'Marvel Image Wallpaper',
    link: '/'
}


function Marvel(){
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
       getDataComics()
       .then(res=> res.json())
       .then(data=>{
        setLoad(false);
            setItems(data)
        })
       .catch(err=>{
            setError(err.toString())
       })
    
    }, [])
  
    return (
        <div className="container">
            <header>
                <HeaderNavBar title={header.title} url={header.url} alt={header.ult} link={header.link}/>
            </header>
           
                { load 
                ? <div className="title-header">Loading...</div>
                : <div className="container-cards">
                    {
                    items.data.results.map((item,index)=>{
                    let time = new Date(item.dates[0].date)
                   return <CardPicture 
                                key={index}
                                url={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                alt={item.title}
                                titleInfo={`${item.title}`}
                                desInfo={`${item.description}`}
                                publicInfo={`${time.toDateString()}`}
                                price={item.prices[0].price}
                                urlInfo={`${item.urls[0].url}`}
                                copyRight="Data provided by Marvel. © 2023 MARVEL"
                  />
                   
                  })}
                 </div>
                
                }
       
        </div>
    )
}



export default Marvel;