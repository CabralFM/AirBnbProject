import "./Navegacao.scss";
import home from "../../assets/logo_menu.svg";
import heartOpenWhite from "../../assets/heart_open_white.svg";
import heartOpenColor from "../../assets/heart_open_color.svg";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


function Navegacao() {
    return <nav className="Navegacao">
        <div className={"Container"}>
            <div className={"div-search"}>
                <NavLink to={"/search"}><FontAwesomeIcon icon={faSearch} className={"icons"}/></NavLink>
            </div>
            <div className={"div-home"}>
                <NavLink to={"/Home"} className={"home-link"}><img src={home} className={"icon-home"}/></NavLink>
            </div>
            <div className={"div-favoritos"}>
                <NavLink to={"/favoritos"} className={"link-favoritos"}>
                    <img className={"fav-white"} src={heartOpenWhite}/>
                    <img className={"fav-color"} src={heartOpenColor}/>
                </NavLink>
            </div>
        </div>
    </nav>;
}

export default Navegacao;