import React from "react";

function Card(props) {
    return (

        <div className={"container"}>
            <div className={"card"}>
                <h2>{props.name}</h2>
                <img src={props.imageUrl} alt={props.name}/>
                <div className={"text"}>
                    <p>{props.description}</p>
                </div>
                <div className={"price"}><h3>{props.price}₽</h3></div>
                <div className={"button"}>
                    <button type="button" onClick={()=>{props.addCartItems(props)}}>В корзину</button>
                </div>
            </div>
        </div>

            );
        }

        export  default Card;


