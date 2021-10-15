
import React from "react"
import {UserInfoProps} from "../../types/userInfo"
const userInfo = (props: UserInfoProps)=>{
    return(
    <aside className="userBio">
        <div className="card">
            {props.avatarUrl && <img src={props.avatarUrl} className="img-user"  alt="user`s picture" />}
            <h3 className="text_brand_one">{props && props.name}</h3>
            <small className="email">{props.email}</small>
            <p>{props.bio}</p>
            <p>{props.location}</p>
            <p>{props.url}</p>
        </div>
    </aside>
    )
}

export default userInfo