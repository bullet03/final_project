import {Link} from "react-router-dom";
import Card from "../Card/Card";
import React, {useState} from "react";

function GoodsCart(props) {
    const [price, setPrice] = useState(0)
    function addPrice(newPrice) {
        let sum = newPrice+price
        setPrice(sum)
    }
    function subtractPrice(newPrice) {
        let sum = price-newPrice
        if (sum<0) {
            sum=0
        }
        setPrice(sum)
    }

    return (
        <>
            <Link to="/">Home</Link>
            <div>
              {props.cartItems.map((product)=> {
                  return (
                      <Card
                          key={product.id}
                          id={product.id}
                          name={product.name}
                          imageUrl={product.imageUrl}
                          description={product.description}
                          price={product.price}
                          addCartItems={props.addCartItems}
                          isGoodCartList={true}
                          addPrice={addPrice}
                          subtractPrice={subtractPrice}
                      />
                  )
              })}
            </div>
            <div>
                price:{price}
            </div>
        </>
    );
}

export default GoodsCart;
