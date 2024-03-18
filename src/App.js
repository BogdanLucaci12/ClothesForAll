import React from "react";
import NavigationBar from "./component/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import AccountPage from "./component/accountPage/accountPage.component";
import Shop from "./routes/shop/shop.component";
import ShowSelectedProd from "./routes/shop/showselectedpro/showselectedprod.component";
import CartPage from "./routes/cartPage/cartPage.component";
import UserPage from "./routes/userpage/userpage.compent";
import PaymentPage from "./routes/checkoutPage/paymentPage.component";
import { Payment } from "@mui/icons-material";
const App = () => {

  return (
    <div style={{ paddingTop:"8px" ,overflowX:""}}>
      <Routes>
        <Route path='/' element={<NavigationBar />} >
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path="selprod" element={<ShowSelectedProd />} />
          <Route path='account' element={<AccountPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="userPage" element={<UserPage />}/>
          <Route path="pay" element={<PaymentPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
