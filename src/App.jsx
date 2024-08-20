import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Contact from './components/contact form/Contact'
import Useref from './components/useref/Useref'
import Usecontext from './components/usecontext/Usecontext'
import { createContext, useState } from 'react'
import Usenavigate from './components/usenavigate/Usenavigate'
import Usestate from './components/usestate/Usestate'
import Useeffect from './components/useeffect/Useeffect'
import Edit from './components/useeffect/Edit'
import Useparamas from './components/useparamas/Useparamas'
import Importantdata from './components/important data/Importantdata'
import Userreducer from './components/usereducer/Userreducer'
import Usememo from './components/usememo/Usememo'
import Usecallback from './components/usecallback/Usecallback'
import Usecustom from './components/usecustom/Usecustom'
import Products from './components/products/Products'
import View from './components/products/View'
import Searchdata from './components/search data/Searchdata'
import Cart from './components/cart/Cart'

const data = createContext()

function App() {
  const[state]=useState(true)
  return (
    <>
      <data.Provider value={state}>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='useref' element={<Useref/>} />
          <Route path='context' element={<Usecontext/>} />
          <Route path='navigate' element={<Usenavigate/>} />
          <Route path='usestate' element={<Usestate/>} />
          <Route path='useeffect' element={<Useeffect/>} />
          <Route path='edit/:id' element={<Edit/>} />
          <Route path='useparams' element={<Useparamas/>} />
          <Route path='important' element={<Importantdata/>} />
          <Route path='reducer' element={<Userreducer/>} />
          <Route path='usememo' element={<Usememo/>} />
          <Route path='usecallback' element={<Usecallback/>} />
          <Route path='custom' element={<Usecustom/>} />
          <Route path='products' element={<Products/>} />
          <Route path='view/:id' element={<View/>} />
          <Route path='searchdata' element={<Searchdata/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </data.Provider>
    </>
  )
}

export default App
// eslint-disable-next-line react-refresh/only-export-components
export {data}