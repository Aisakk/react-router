import { useEffect, useState } from "react";
import CardNasa from "../component/CardNasa";
import HeaderNavBar from "../component/HeaderNavBar";
import  getDataNasa  from '../services/nasa_api'
let header = {
    title: 'Nasa',
    url: 'https://images.hdqwalls.com/download/nasa-logo-blue-5k-p0-1920x1080.jpg',
    alt: 'Nasa Image Wallpaper',
    link: '/'
  }

function Nasa(){
    const [stateNasa, setNasa] = useState([]);
    const [load, setLoad] = useState(true);
    useEffect(()=>{
        getDataNasa().then(res=> res.json()).then(data=>{
            setLoad(false);
            setNasa([data])
        })
    },[]);

    return (
        <div className="container">
            <header>
                <HeaderNavBar title={header.title} url={header.url} alt={header.ult} link={header.link}/>
            </header>
            <main>
                { load
                    ? <div className="title-header">Loading...</div>
                    : stateNasa.map((item,index) => {
                       return <CardNasa 
                                key={index}
                                title={item.title}
                                hdurl={item.hdurl} 
                                media_type={item.media_type} 
                                explanation={item.explanation} 
                                copyright={item.copyright} 
                                date={item.date}/>
                    })
                }
            </main>
        </div>
    )
}

export default Nasa;