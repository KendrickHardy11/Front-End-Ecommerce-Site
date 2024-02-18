import Navbar from "../Components/Navbar/Navbar";
import { MENS_PRODUCTS } from "../MensProducts.js"
import { Product } from "./Product.jsx"
import "./Shop.css"

export default function Mens(){
    return( 
        <div>
            <Navbar/>
            <div className="shop">
                <div className="shopTitle">
                    <h1>Men's Clothes</h1>
                </div>
                <div className="products">
                    {" "}
                    {MENS_PRODUCTS.map((product) => (<Product data={product}/>))}
                </div>
            </div>
        </div>
    );
}