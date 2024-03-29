import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NewFeatured from "./Pages/NewFeatured.jsx";
import Mens from "./Pages/Mens.jsx";
import Womens from "./Pages/Womens.jsx";
import Kids from "./Pages/Kids.jsx";
import SignIn from "./Pages/SignIn.jsx";
import { Product } from "./Pages/Product.jsx"
import { ShopContextProvider } from "./Context/ShopContext.jsx";
import { Cart } from "./Pages/Cart/Cart.jsx";

function Clothify() {
  return(
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NewFeatured/>}/>
            <Route path='/mens' element={<Mens/>}/>
            <Route path='/womens' element={<Womens/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default Clothify
