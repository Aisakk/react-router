import { useState } from "react"
import CardInfo from "./CardInfo"

const CardPicture = ({url, alt,  titleInfo, desInfo ,publicInfo, price,urlInfo, copyRight }) =>{
    let [info, setInfo] = useState(false)
    let showInfo = () => {
      
       setInfo(!info)
      
    }
   
    return(
        <div className="card-picture" onMouseEnter={showInfo} onMouseLeave={showInfo}>
            <img src={url} alt={alt} />
            <div className={info ? 'show' : 'close'}  >
                <CardInfo 
                    title={titleInfo} 
                    description={desInfo} 
                    published={publicInfo} 
                    price={price}
                    link={urlInfo} 
                    copyright={copyRight}
                    /> 
            </div>
          
        </div>
    );
}

export default CardPicture;