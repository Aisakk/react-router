import { Link } from "react-router-dom";

const HeaderNavBar = ({url, alt, title, link}) =>{
    return(<div className="Header">
                <div className="container-header">
                        <img src={url} alt={alt} className="img-header"/>
                        <div className="container-header-link">
                        <h2 className="title-header">{title}</h2>
                        <Link to={link}> Ir Pagina Principal </Link>
                        </div>
                      
                </div>
            </div>
    )
}


export default HeaderNavBar;