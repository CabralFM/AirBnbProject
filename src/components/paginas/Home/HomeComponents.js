import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import heartOpenWhite from "../../../assets/heart_open_white.svg";
import heartFull from "../../../assets/heart_full.svg";
import {useFavoritos} from "../favoritos/FavoritosContext";

// --- FUNCAO P/ BUSCAR AS CASAS NA API  ---
function HomeComponents(props) {
    const {isFavorito, toggleFavorito} = useFavoritos()

    return <div className={"Casa"}>
        <div className={"casaPic"}>
            <Link to = {"./detalhes/" + props.id}>
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
            <h4>{props.time}</h4>
            <h5>{props.price} € </h5>
        </div>

    </div>;
}

export default HomeComponents;