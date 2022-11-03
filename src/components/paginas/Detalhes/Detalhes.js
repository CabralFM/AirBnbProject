import {useEffect, useState} from "react";
import "./Detalhes.scss";
import axios from "axios";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import airConditioner from "../../../assets/ac.svg";
import dog from "../../../assets/dog.svg";
import fireplace from "../../../assets/fireplace.svg";
import microwave from "../../../assets/microwave.svg";
import smokingAllowed from "../../../assets/smoking.svg";
import tv from "../../../assets/tv.svg";
import washingMachine from "../../../assets/washer.svg";
import wifi from "../../../assets/wifi.svg";
import heartOpenWhite from "../../../assets/heart_open_white.svg";
import heartFull from "../../../assets/heart_full.svg";
import {useFavoritos} from "../favoritos/FavoritosContext";


function Detalhes() {

    const {id_casa} = useParams();
    const [detalhes, setDetalhes] = useState(null)
    const [anfitriao, setAnfitriao] = useState(null)
    const [features, setFeatures] = useState(null)
    const [galeria, setGaleria] = useState(null)
    const [comentarios, setComentarios] = useState(null)
    const {isFavorito, toggleFavorito} = useFavoritos()




    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}`)
            .then(response => setDetalhes(response.data));
    }, [id_casa]);

    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/features`)
            .then(response => setFeatures(response.data));
    }, [id_casa]);

    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/reviews/`)
            .then(response => setComentarios(response.data));
    }, [id_casa]);

    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/photos`)
            .then(response => setGaleria(response.data));
    }, [id_casa]);
    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/host`)
            .then(response => setAnfitriao(response.data));
    }, [id_casa]);



// add if abaixo pra cada parte do cod q ele corresponde pra tornar a pg mais rapida a carregar
    if (!detalhes || !features || !comentarios || !galeria || !anfitriao) return <h1>A carregar...</h1>;


    return <div className={"detalhes"}>
        <div className={"infoCasa"}>
            <h1>{detalhes.title}</h1>
            <h4><FontAwesomeIcon icon={faStar}/> {detalhes.rating} · {detalhes.city}, {detalhes.country}</h4>

        </div>

            <div className={"detalhesCasa"}>
                <div className={"fotoCasa"} style={{backgroundImage: `url(https://m9-frontend.upskill.appx.pt/upbnb/${detalhes.featured_photo})`}}>
                    <div className={"iconeCoracao"}>
                <img className={"favIcon"}
                     onClick={() => {
                         toggleFavorito(detalhes.id)
                     }}
                     src={isFavorito(detalhes.id) ? heartFull : heartOpenWhite }/>
            </div>
                <div className={"gradiente"}/>
                <img src={detalhes.imagem}/>
                </div>
            </div>

        <div className={"priceCasa"}>
            <h1>{detalhes.price}€ noite</h1>
        </div>

        <div className={"descricaoCasa"}>
            <h1>{detalhes.description}</h1>
        </div>

        <div>
            <div>
                {features.features.includes("airConditioner") && <img className={"iconesTemNaCasa"} src={airConditioner}/>}
                {features.features.includes("petsAllowed") && <img className={"iconesTemNaCasa"} src={dog}/>}
                {features.features.includes("tv") && <img className={"iconesTemNaCasa"} src={tv}/>}
                {features.features.includes("microwave") && <img className={"iconesTemNaCasa"} src={microwave}/>}
                {features.features.includes("wifi") && <img className={"iconesTemNaCasa"} src={wifi}/>}
                {features.features.includes("fireplace") && <img className={"iconesTemNaCasa"} src={fireplace}/>}
                {features.features.includes("washingMachine") && <img className={"iconesTemNaCasa"} src={washingMachine}/>}
                {features.features.includes("smokingAllowed") && <img className={"iconesTemNaCasa"} src={smokingAllowed}/>}
            </div>
            <div>
                {!features.features.includes("airConditioner") && <img className={"iconesNaoTemNaCasa"} src={airConditioner}/>}
                {!features.features.includes("petsAllowed") && <img className={"iconesNaoTemNaCasa"} src={dog}/>}
                {!features.features.includes("tv") && <img className={"iconesNaoTemNaCasa"} src={tv}/>}
                {!features.features.includes("microwave") && <img className={"iconesNaoTemNaCasa"} src={microwave}/>}
                {!features.features.includes("wifi") && <img className={"iconesNaoTemNaCasa"} src={wifi}/>}
                {!features.features.includes("fireplace") && <img className={"iconesNaoTemNaCasa"} src={fireplace}/>}
                {!features.features.includes("washingMachine") && <img className={"iconesNaoTemNaCasa"} src={washingMachine}/>}
                {!features.features.includes("smokingAllowed") && <img className={"iconesNaoTemNaCasa"} src={smokingAllowed}/>}
            </div>
        </div>

        <div className={"sobreAnfitriao"}>
            <h3>Sobre o anfitrião</h3>

            <div className={"destaqueAnfitriao"}>
            <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${anfitriao.photo}`} className={"imagemAnfitriao"}/>
                <div className={"nomeAnfitriao"}>
                <h4>{anfitriao.name}</h4>
                <h6><FontAwesomeIcon icon={faStar}/> {anfitriao.rating}</h6>
            </div>
            </div>
                <div className={"infoAnfitriao"}>
                <h5>Sou um jovem empreendedor que adora viajar!!!
                    Eu moro em Lisboa e tenho dois filhos com 9 e 5 anos de
                    idade e adoro passar muito tempo com eles. </h5>
                </div>

        </div>


        <div className={"galeria"}>
            <h2>Galeria</h2>
            <div className={"galeriaPics"}>
            {galeria.photos.slice(1).map(l =>
                    <img src={`https://m9-frontend.upskill.appx.pt/upbnb/${l}`}/>)}

            </div>
        </div>


        <div className={"tituloComentarios"}>
            <h2>Comentários</h2>
        </div>
            <div>
                {comentarios.reviews.map((c, idx) => {
                    let data = new Date(c.data);
                    return <div key={idx} className={"comentatarios"}>
                        <div className={"picComentarios"}>
                        <img className={"foto_user"} src={"https://m9-frontend.upskill.appx.pt/upbnb/"+c.photo}/>

                        <div className={"nomeData"}>
                        <h4>{c.name}</h4>
                        <h5>{c.date}</h5>
                        </div>
                        </div>
                        <p>{c.comment}</p>
                    </div>
                })}

        </div>

    </div>;
}

export default Detalhes;