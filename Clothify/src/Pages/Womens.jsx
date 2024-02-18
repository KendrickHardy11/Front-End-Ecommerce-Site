import Navbar from "../Components/Navbar/Navbar";
import { WOMENS_PRODUCTS } from "../WomensProducts.js"
import { Product } from "./Product.jsx"
import "./Shop.css"

export default function Womens(){
    return( 
        <div>
            <Navbar/>
            <div className="shop">
                <div className="shopTitle">
                    <h1>Women's Clothes</h1>
                </div>
                <div className="products">
                    {" "}
                    {WOMENS_PRODUCTS.map((product) => (<Product data={product}/>))}
                </div>
            </div>
        </div>
    );
}