import "./Casa.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import heartOpenWhite from "../../assets/heart_open_white.svg";
import heartFull from "../../assets/heart_full.svg";
import {useFavoritos} from "../paginas/favoritos/FavoritosContext";

// --- FUNCAO P/ BUSCAR AS CASAS NA API  ---
function Casa(props) {
    const {isFavorito, toggleFavorito} = useFavoritos()

    return <div className={"Casa"}>
        <div className={"casaPic"}>
            <Link to = {"./Detalhes/" + props.id}>
                <img className={"fotoDaCasa"} src={"https://m9-frontend.upskill.appx.pt/upbnb/"+ props.featured_photo}/>
            </Link>
            <div className={"iconeCoracao"}>
            <img className={"favIcon"}
                 onClick={() => {
                    toggleFavorito(props.id)
            }}
            src={isFavorito(props.id) ? heartFull : heartOpenWhite }/>
            </div>
        </div>

        <div className={"conteudo"}>
            <h3>{props.city}, {props.country}</h3>
            <h3><FontAwesomeIcon icon={faStar}/> {props.rating}</h3>
            <h4>Anfitrião {props.host_type}</h4>
            <h5>{props.price} € noite </h5>
        </div>

    </div>;
}

export default Casa;