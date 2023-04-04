import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SearchSection from './components/SearchSection'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Cart from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import Carousel from './components/Carousel'
import CategoryPage from './pages/CategoryPage'
import { useAppSelector } from './app/hooks'
import Footer from './components/Footer'

function App() {

  const { navCate, showCart, showProduct } = useAppSelector((state) => state.DataSlice);
  return (
    <div className="App">
      <Navbar />
      {showCart || showProduct ?
        <div className='bg-[#E6B94A]'>
          <SearchSection />
        </div> :
        <div className='background'>
          <SearchSection />
          <Carousel />

        </div>
      }
      <Routes>
        <Route path='/' element={navCate ? <CategoryPage /> : <Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
