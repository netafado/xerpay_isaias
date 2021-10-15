
import { useEffect, useRef, useState } from "react"
import {RouteComponentProps, withRouter} from "react-router-dom"

import catImage from "../../assets/img/cat.svg"
const SearchPage = (props : RouteComponentProps) => {

    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const [user, setUser] = useState("");

    const chagenState = ()=>{
        setShowInput(true)
    }

    const goToResult = () =>{
        if(!user) return
        props.history.push( `/result/${user}` )
    }

    useEffect(()=>{
        if (null !== inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput])

    return (
        <section id="search">
            <div className="container clearfix">
                <div className="row">
                    <label htmlFor="search" className="hideLabel">Procurar</label>
                    <img src={catImage} className="cat-image" alt="Gato roxo" />
                    {!showInput ?
                    <div className="card ">
                        <h1 className="text-center title">Encontre o git <span className="text_brand_one">estrelado</span></h1>
                        <button onClick={chagenState} className="btn btn_outline_brand_one btn_wrraper">Bora lá</button>
                    </div>
                    :
                    <div className="card ">
                        <h1 className="text-center title">Nome do usuário ou apelido</h1>
                        <div className="row btn_wrraper">
                            <input ref={inputRef} value={user} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setUser(e.target.value)} className="form-input" type="text" name="search" placeholder={"Nome do usuário"} /> 
                            <button onClick={goToResult} className="btn btn_outline_brand_one btn_wrraper">Procurar</button>
                        </div>
                    </div>
                    }                    
                </div>
            </div>
        </section>
    )
}

export default withRouter(SearchPage)