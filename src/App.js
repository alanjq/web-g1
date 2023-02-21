import React, { useState } from 'react';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './pages/LayoutPage';
import StorePage from './pages/StorePage';
import StoreCartPage from './pages/StoreCartPage';
import { CartContext } from './context/CartContext';


function App() {
  const [cartProducts, setCartProducts] = useState([])

  // Agregar un producto al carrito
  const addProduct = (newproduct) => {
    let newlist = cartProducts
    newlist.push(newproduct)
    setCartProducts(newlist)
    console.log('Lista de productos', newlist);
  }

  const deleteProduct = () => {
    console.log('delete product desde context');
    // const idToDelete = 1
    // let currentlist = productList.filter(
    //     (obj) => obj.id !== idToDelete
    // )
    // console.log('NEW LIST', currentlist);
  }


  return (
    <div>
      <CartContext.Provider value={{ cartProducts, addProduct, deleteProduct }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="projects" element={<ProjectPage />} />
              <Route path="store" element={<StorePage />} />
              <Route path="cart" element={<StoreCartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
