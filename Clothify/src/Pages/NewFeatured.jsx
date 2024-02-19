import Navbar from "../Components/Navbar/Navbar";
import { PRODUCTS } from "../products.js"
import { Product } from "./Product.jsx"
import "./Shop.css"

export default function NewFeatured(){
    return( 
        <div>
            <Navbar/>
            <div className="shop">
                <div className="shopTitle">
                    <h1>New & Featured</h1>
                </div>
                <div className="products">
                    {PRODUCTS.map((product) => (<Product data={product}/>))}
                </div>
            </div>
        </div>
    );
}