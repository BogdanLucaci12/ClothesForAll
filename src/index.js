import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
import { CategorieProvider } from './context/categorie.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemProvider } from './context/itemcontext.component';
import { CartProvider } from './context/addtocart.context';
import { FavoritesProvider } from './context/favorites.context';
import { SearchItemProviver } from './context/searchitem.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <SearchItemProviver>
        <CategorieProvider>
          <ProductsProvider>
            <ItemProvider>
              <CartProvider>
                <FavoritesProvider>
              <App />
                </FavoritesProvider>
              </CartProvider>
            </ItemProvider>
          </ProductsProvider>
        </CategorieProvider>
        </SearchItemProviver>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
