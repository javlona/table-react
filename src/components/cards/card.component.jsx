import React from 'react'
import './card.css'

export const Card = (props) => (
        <div className="card-container">
            <img alt="users" src={`https://picsum.photos/300/400?random=${props.users.id}`}></img>
            <h3>{props.users.name}</h3>
            <p>{props.users.email}</p>
            <p>{props.users.address.city}</p>
            <p>{props.users.phone}</p>
            <p>{props.users.website}</p>
            <div className="action">
                <p className="delete" 
                    onClick={ () => props.deleteHandler(props.users.id) }>delete</p>
                <p className="edit" onClick={ () => props.editHandler(props.users.id) }>edit</p>
            </div>
        </div>
    )
