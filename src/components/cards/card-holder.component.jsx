import React from "react";
import { Card } from "../cards/card.component"
import './card-holder.style.css'


export const CardHolder = (props) => {
    
    return (
        <div className="card-holder">
            {props.users.map(user => (
              <Card key={user.id} users = {user} />
            ))}
        </div>
    )
} 