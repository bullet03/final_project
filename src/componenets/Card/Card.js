import React from "react";


function Card(props) {
    function counter() {
        console.log("counter")
    }

    return (

        <div className="container">
            <div className="card">
                <h2>{props.name}</h2>
                <img src={props.imageUrl} alt={props.name}/>
                {props.isCardsList && <div className="text"><p>{props.description}</p></div>}
                <div className="price"><h3>{props.price}₽</h3></div>
                {props.isCardsList && <div className="button">
                    <button type="button" onClick={()=>{props.addCartItems(props)}}>В корзину</button>
                </div>}
                {props.isGoodCartList && (
                    <>
                        <button className="plus" type="button" onClick={()=>{counter()}}>+</button>
                        <button className="minus" type="button" onClick={()=>{counter()}}>-</button>
                    </>
                )}

            </div>
        </div>

            );
        }

        export  default Card;


