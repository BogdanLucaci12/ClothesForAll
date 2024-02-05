import React from "react";
import NavigationBar from "./component/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import AccountPage from "./component/accountPage/accountPage.component";
import Shop from "./routes/shop/shop.component";
import ShowSelectedProd from "./routes/shop/showselectedpro/showselectedprod.component";
import CartPage from "./routes/cartPage/cartPage.component";
const App = () => {

  return (
    <div style={{ margin: '10px' }}>
      <Routes>
        <Route path='/' element={<NavigationBar />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path="selprod" element={<ShowSelectedProd />} />
          <Route path='account' element={<AccountPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
