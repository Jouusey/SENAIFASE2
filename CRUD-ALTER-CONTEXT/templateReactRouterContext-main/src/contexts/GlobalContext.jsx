import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [produtoSurpresa, setProdutoSurpresa] = useState("Farinha")
const [produtos, setProdutos] = useState([])



    return(
        <GlobalContext.Provider value={{produtoSurpresa, setProdutoSurpresa, produtos, setProdutos}}>
            {children}
        </GlobalContext.Provider>
    )
}
