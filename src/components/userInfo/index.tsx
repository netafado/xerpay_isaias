
import React from "react"
import {UserInfoProps} from "../../types/userInfo"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
const userInfo = (props: UserInfoProps)=>{
    return(
    <aside className="userBio">
        <div className="card">
            {props.avatarUrl && <img src={props.avatarUrl} className="img-user"  alt="user`s" />}
            <h3 className="text_brand_one">{props && props.name}</h3>
            <small className="email">{props.email}</small>
            <p>{props.bio}</p>
            <p>{props.location}</p>
            <a target="_blank" rel="noreferrer" href={props.url}><FontAwesomeIcon icon={faGlobe} /> GitHub</a>
        </div>
    </aside>
    )
}

export default userInfo