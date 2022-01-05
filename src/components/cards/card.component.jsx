import React from 'react'
import './card.css'

const deleteHandler = (id) => {
    
    let deleted = props.users.filter(item => item.id != id)
    console.log(deleted)
  }

const updateHandler = (id) => {

    

}

export const Card = (props) => (
        <div className="card-container">
            <img alt="users" src={`https://picsum.photos/300/400?random=${props.users.id}`}></img>
            <h3>{props.users.name}</h3>
            <p>{props.users.email}</p>
            <p>{props.users.address.city}</p>
            <p>{props.users.phone}</p>
            <p>{props.users.website}</p>
            <div className="action">
                <p className="delete" onClick={() => deleteHandler(props.users.id)}>delete</p>
                <p className="edit" onClick={() => updateHandler(props.users.id)}>edit</p>
            </div>
        </div>
    )
