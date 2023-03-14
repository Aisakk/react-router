
//}
const CardInfo = ({title,description,published, price,link, copyright})=>{
    return (
        <div className="card-info">
            <div className="description">
                <h3>{title}</h3>
                <h4 className="sub-title">Description</h4>
                <p>{description}</p>
                <h5>Published: {(`${published}`)}</h5>
                <p>Price: $ {price}</p>
                <p>{copyright}</p>
              
            </div>
            <a href={link}> Ir mas detalles</a>
        </div>
    )
}


export default CardInfo;