import React from "react";
import './card.style.css'

export const Card = (props) => {
    
    return (
        <div className="card">{props.children}</div>
    )
} 