
const CardNasa = ({title, hdurl, media_type, explanation, copyright,date}) =>{
    return(
        <div className="container-nasa">
                            <div className="container-title-nasa">
                                <h3>{title}</h3>
                            </div>
                            <div className="container-img">
                                <img src={hdurl} alt={media_type} className="hdimg" />
                            </div>
                            <div className="description-nasa">
                                {explanation}
                            </div>
                            <div className="copyright">
                                {copyright}-{date}
                            </div>
                        </div>
    )
}

export default CardNasa;