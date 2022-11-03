import {useEffect, useState} from "react";
import "./Search.scss";
import {faSearch, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Casa from "../../casa/Casa"
import axios from "axios";


function Search() {
    const [filtro, setFiltro] = useState("");
    const [pagina, setPagina] = useState(1);
    const [limitPages,setLimitPages] = useState(1);
    const [lista_casas, setListaCasas] = useState([]);


    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas', {params: {page: pagina, search: filtro}})
            .then(response => {
                setLimitPages(response.data.pages)
                setListaCasas(pagina === 1 ? response.data.data : [...lista_casas, ...response.data.data])
            });
    }, [pagina, filtro]);

    useEffect(() => {
        setPagina(1);
    }, [filtro]);


    return <div className={"Search"}>
        {/* --- DIV DA BOX DE PESQUISA --- */}
        <div className={"pesquisa"}>
            <input type = "text" placeholder="Procurar" onChange={e => setFiltro(e.target.value)}/>
            <div className={"search-icon"}>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
        </div>

        {/* --- FUNCAO P/ PESQUISAR AS CASAS --- */}
        {!lista_casas && <p>A carregar</p>}
        {lista_casas && <>
            {lista_casas.length === 0 && <p>Sem resultados</p>}
            {lista_casas.map(l => <Casa
                key={l.id}
                {...l}
             />)}

        </>}

        {/* --- BOTAO MAIS CASAS AO FINAL DA PG --- */}

            <div className={"paginacao"}>
                {pagina < limitPages &&
                    <div onClick={() => setPagina(pagina + 1)}>
                        <span>mais resultados</span>

                    </div>}
            </div>



    </div>;
}


export default Search;