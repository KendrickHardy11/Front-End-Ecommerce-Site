import Navbar from "../Components/Navbar/Navbar"
import { KIDS_PRODUCTS } from "../KidsProducts.js"
import { Product } from "./Product.jsx"
import "./Shop.css"

export default function Kids(){
    return( 
        <div>
            <Navbar/>
            <div className="shop">
                <div className="shopTitle">
                    <h1>Kid's Clothes</h1>
                </div>
                <div className="products">
                    {KIDS_PRODUCTS.map((product) => (<Product data={product}/>))}
                </div>
            </div>
        </div>
    );
}