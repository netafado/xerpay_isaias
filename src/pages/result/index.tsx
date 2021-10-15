
import { useEffect, useState } from "react"
import client from "../../graphql/client"
import { getUserAndRepositories } from "../../graphql/getInfo"
import {UserInfoProps} from "../../types/userInfo"
import UserInfo from "../../components/userInfo"
import {RouteComponentProps, withRouter} from "react-router-dom"
import NotFound from "../../components/notFound"
import Loading from "../../components/loading"

interface Node {
    node: object
}

type RepoProps = {
    id: string
    name: string,
    description: string | null
    url: string
}


const Result = ({history, match} : RouteComponentProps<{ user: string }>) => {
    const [loading, setLoaading] = useState(false)
    const [notFount, setNotFount] = useState(false)
    const [repos, setRepos] = useState([])
    const [userInfo, setUserInfo] = useState<UserInfoProps | null>(null)
    const {params} = match
    const getData = async()=>{
        setLoaading(true)
        try {
            const data = await client.request(getUserAndRepositories, {login: params.user})
            const {user} = data;
            setUserInfo(user)
            const repositories = user.starredRepositories.edges.map(({node}: Node)=>{return node})
            setRepos(repositories)
        } catch (error) {
            console.log(error)
            setNotFount(true)
        }
        setLoaading(false)

    }

    const goBackHome = ()=>{
        history.push("/")
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <section id="result">
            <Loading show={loading} />
            <article className="container">
                <header>
                    <div className="row">
                        <div className="text-info">
                            <h1 >Resultado</h1>
                        </div>
                    </div>
                    <button className="close" onClick={goBackHome}>
                        <i className="fas fa-times"></i>
                    </button>
                </header>
                <div className="row">
                    {userInfo &&  <UserInfo {...userInfo} />}
                    <main className="userRepo">
                        <div className="card">
                            {notFount && <NotFound goBackHome={goBackHome} />}
                            <ul className="repo_list">
                                {repos.map( (repo: RepoProps)=>{
                                    return(
                                    <li key={repo.id}>
                                        <h3>{repo.name}</h3>
                                        <p>{repo.description}</p>
                                        <a target="_blank" rel="noreferrer" href={repo.url}>link</a>
                                    </li>
                                    )
                                } )}
                            </ul>
                        </div>
                    </main>
                </div>
            </article>
        </section>
    )
}

export default withRouter(Result)