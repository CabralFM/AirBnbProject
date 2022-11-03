
import React, {useState} from "react";

//Ideia de ser global..
const FavoritosContext = React.createContext();


//Permite entrar nos favoritos e setfavoritos em contexto global
function ProviderFavoritos(props) {

    //Acede aos  favoritos guardados localStorage, caso não exista devolve array vazio
    const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("favoritos")) || []);


    const isFavorito = (id) => {
        return favoritos.includes(id);
    }

    function toggleFavorito(id) {
        let clone = [...favoritos];
        if (isFavorito(id)) {
            // Remover
            clone.splice(clone.indexOf(id), 1);
        } else {
            // Adicionar
            clone.push(id);
        }
//guarda os favoritos no localStorage
        localStorage.setItem("favoritos", JSON.stringify(clone));


        setFavoritos(clone);
    }

    return <FavoritosContext.Provider value={{favoritos, setFavoritos, isFavorito, toggleFavorito}}>
        {props.children}
    </FavoritosContext.Provider>
}

function useFavoritos() {
    return React.useContext(FavoritosContext);
}


export {useFavoritos, ProviderFavoritos};
