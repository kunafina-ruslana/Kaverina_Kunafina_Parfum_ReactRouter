import { Route, Routes } from 'react-router-dom'
import './App.css'
import BlogPage from './pages/BlogPage/BlogPage'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ShopPage from './pages/ShopPage/ShopPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  )
}

export default App
