import "./Favoritos.scss";
import {useEffect, useState} from "react";
import axios from "axios";
import {useFavoritos} from "./FavoritosContext";
import Casa from "../../casa/Casa";



function Favoritos(props) {

    const {favoritos} = useFavoritos();
    const [arrayFavoritos, setArrayFavoritos] = useState(null);

    useEffect(() => {
        if (favoritos.length === 0) {
            setArrayFavoritos([])
        } else {
            axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas`, {
                params: {
                    ids: favoritos.join(',')
                }
            })
                .then(response => {
                    let countryHouses = {};
                    response.data.data.forEach((f) => {
                        if (!countryHouses[f.country])
                            countryHouses[f.country] = [];
                        countryHouses[f.country].push(f);
                    })
                    setArrayFavoritos(countryHouses);
                });
        }
        }, []);

    if (!arrayFavoritos) return null

    return <div className={"favoritos"}>
        <h2>Favoritos</h2>
        {!Object.keys(arrayFavoritos) && <p>A carregar</p>}
        {Object.keys(arrayFavoritos) && <>
            {Object.keys(arrayFavoritos).length === 0 && <p>Sem resultados</p>}
            {Object.keys(arrayFavoritos).length > 0 && Object.keys(arrayFavoritos).map((country) =>
                <div className={'ListaDeCasas'} key={country.id}>
                <h1>{country}</h1>
                {arrayFavoritos[country].map(house => <Casa
                    key={house.id}
                    type={"favoritos"}
                    {...house}
                />)}
            </div>)}
        </>}
    </div>
}
export default Favoritos;