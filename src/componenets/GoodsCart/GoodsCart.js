import {Link} from "react-router-dom";

function GoodsCart(props) {
    console.log("data", props.cartItems)
    return (
        <>
            <Link to="/">Home</Link>
            <div>
              {props.cartItems}
            </div>
        </>
    );
}

export default GoodsCart;
