import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {useState} from "react";
import './App.css';
import CardList from "./componenets/CardList/CardList";
import GoodsCart from "./componenets/GoodsCart/GoodsCart";



function App() {

    const [cartItems, setCartItems] = useState([])
    function addCartItem (item) {
        console.log("item", item)
        setCartItems ([...cartItems,item])
    }

  return (
      <BrowserRouter>
          <div className="App">

                <Routes>
                    <Route path="/" element={<CardList addCartItems={addCartItem}/>}/>
                    <Route path="/cart" element={<GoodsCart cartItems={cartItems}/>}/>
                </Routes>
          </div>
    </BrowserRouter>

  );
}

export default App;
