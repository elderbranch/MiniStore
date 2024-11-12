import { BrowserRouter, Route, Routes } from "react-router-dom";

import './styles/App.css'
import CatalogPage from './components/pages/CatalogPage/CatalogPage'
import Header from "./components/Header/Header";  
import ProductDetails from "./components/ProductDetails/ProductDetails";

import { ProductsProvider } from "./components/ProductsContext";

function App() {

  return (
      <ProductsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductDetails/>} />
          </Routes>
        </BrowserRouter>
      </ProductsProvider>
  )
}

export default App
