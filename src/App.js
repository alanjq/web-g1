import React, { useState } from 'react';

// Pages
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import InfoPokePage from './pages/InfoPokePage';
import LayoutPage from './pages/LayoutPage';
import PokeHome from './pages/PokeHome';
import PokeLayout from './pages/PokeLayout';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectsPage';
import StoreCartPage from './pages/StoreCartPage';
import StorePage from './pages/StorePage';
import { FromLocalStorage, ToLocalStorage } from './utils/localstorage'


function App() {
  const [cartProducts, setCartProducts] = useState(FromLocalStorage())
  const getProducts = () => cartProducts || FromLocalStorage()

  // Agregar un producto al carrito
  const addProduct = (newproduct) => {
    let newlist = cartProducts
    newlist.push(newproduct)
    setCartProducts(newlist)
    ToLocalStorage(newlist)
  }

  const deleteProduct = (id) => {
    // Obtenemos los productos que no tengan el id que buscamos
    let newlist = cartProducts.filter(producto => producto.id !== id)
    // Asignamos el nuevo objeto al estado
    setCartProducts(newlist)
  }


  return (
    <div>
      <CartContext.Provider value={{ cartProducts, getProducts, addProduct, deleteProduct }}>
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

      <BrowserRouter>
        <Routes>
          <Route path="/poke" element={<PokeLayout />}>
            <Route index element={<PokeHome />} />
            <Route path=":pokename" element={<InfoPokePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
