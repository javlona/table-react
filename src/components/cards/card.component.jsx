import React from 'react'
import './card.css'

export const Card = (props) => (
        <div className="card-container">
            <img alt="users" src={`https://picsum.photos/300/400?random=${props.users.id}`}></img>
            <p>{props.users.name}</p>
        </div>
    )
