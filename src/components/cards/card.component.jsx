import React from 'react'
import './card.css'

export const Card = (props) => (
        <div className="card-container">
            <p>{props.users.name}</p>
        </div>
    )
