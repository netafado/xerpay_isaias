import React from "react"
import { MouseEventHandler } from "react-router/node_modules/@types/react"

type Props = {
    goBackHome: MouseEventHandler
}

const NotFound = ({goBackHome}: Props)=>{
    return(
        <>
        <h3>Nenhum usuário encontrado</h3>
        <button onClick={goBackHome} className="btn btn_outline_brand_one btn_wrraper">Voltar</button>
        </>
    )
}

export default NotFound