import React, {useState} from "react";
import {useEffect} from "react";
import Card from "../Card/Card";
import {Link} from "react-router-dom";

function CardList (props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://61b60580c95dd70017d40deb.mockapi.io/item')
            .then((result) => {
                return result.json();
            })
            .then((json) => {
                setItems(json);
            })
    }, [])

return(
    <>
        <Link to="/cart">Cart</Link>
        <div>{items.map((product) => {
            return(
               <Card
                   key={product.id}
                   id={product.id}
                   name={product.name}
                   imageUrl={product.imageUrl}
                   description={product.description}
                   price={product.price}
                   addCartItems={props.addCartItems}
               />
            )
        })}</div>
    </>
)
}

export default CardList;