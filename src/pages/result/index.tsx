
import { useEffect, useRef, useState } from "react"
import "./result.scss"
import catImage from "../../assets/img/cat.svg"
import client from "../../graphql/client"
import { getUserAndRepositories } from "../../graphql/getInfo"
interface UserInfo {
    name: string
}
const Result = () => {
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
    const chagenState = async()=>{

        const data = await client.request(getUserAndRepositories, {login: "netafado"})
        const {user} = data;
        setUserInfo(user)
        console.log(user)
        setShowInput(true)

    }
    useEffect(()=>{
        if (null !== inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput])
    return (
        <section id="result">
            <article className="container">
                <header>
                    <div className="row">
                        <div className="text-info">
                            <img src={catImage} className="cat-image" alt="Gato roxo" />
                            <h1 onClick={chagenState}>Resultado</h1>
                        </div>
                    </div>


                    <button className="close">X</button>
                </header>
                <div className="row">
                    <aside className="userBio">
                        <div className="card">
                            <h3>{userInfo && userInfo.name}</h3>

                        </div>
                    </aside>
                    <main className="userRepo">
                        <div className="card">
                            <h3>{userInfo && userInfo.name}</h3>
                            <p>description</p>
                        </div>
                    </main>
                </div>
            </article>
        </section>
    )
}

export default Result