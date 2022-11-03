import {useEffect, useState} from "react";
import "./Home.scss";
import axios from "axios";
import HomeComponents from "./HomeComponents";

function Home() {
    const [reservAtual, setReservAtual] = useState(null);
    const [reservasPast, setReservasPast] = useState(null);

    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas/current')
            .then(response => setReservAtual(response.data.data));
    }, []);

    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas/past')
            .then(response => setReservasPast(response.data.data));
    }, []);


    return <div className={"Home"}>

        <h1> Bem-vindo(a) </h1>
        <h4> Ao seu perfil </h4>



        {/* --- MOSTRA O RESULTADO DAS CASAS Q FORAM BUSCADAS LA NA API PELA FUNCAO useEffect USADA ACIMA*/}
        <div className={"reservasAtuais"}>
            <h3>As minhas reservas</h3>
        </div>
        {!reservAtual && <p>A carregar</p>}
        {reservAtual && <>
        {reservAtual.length === 0 && <p>Sem resultados</p>}
        {reservAtual.map(l => <HomeComponents
            key={l.id}
            {...l}
        />)}
        </>}

        <div className={"reservasPast"}>
            <h3>Reservas passadas</h3>
        </div>
        {!reservasPast && <p>A carregar</p>}
        {reservasPast && <>
            {reservasPast.length === 0 && <p>Sem resultados</p>}
            {reservasPast.map(l => <HomeComponents
                key={l.id}
                {...l}
            />)}
        </>}
    </div>;
}

export default Home;