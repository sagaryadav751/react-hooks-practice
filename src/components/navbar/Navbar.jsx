import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Navbar = () => {
  const [category,setCategory]=useState([])
const  cardProducts=useSelector(state=>state.cart)
// console.log(cardProducts)
  useEffect(()=>
  {
      axios.get('https://fakestoreapi.com/products/categories')
      .then((res)=>
  {
      setCategory(res.data)
  })
  },[])
  return (
    <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Today Practice</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="important">Importand Data</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="products"> Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="searchdata"> Search Data</Link>
        </li>




        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products Category
          </Link>
          <ul className="dropdown-menu">
          {
            category.map((item,index)=>
            <li  key={index}>
            <Link className="dropdown-item" to={`/?cate_data=${item}`}>{item}</Link>
           </li>
            )
          }
        </ul>
        </li>



      

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Hooks Dropdown
          </Link>
          <ul className="dropdown-menu">
          <li className="nav-item">
          <Link className="nav-link active" to="useref">Useref</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="context">UseContext</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="reducer">Usereducer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="usecallback">Usecallback</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="custom">Usecustom</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="usestate">UseState</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="useeffect">Useffect</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="usememo">Usememo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="useparams">UseParams</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="navigate">Usenavigate</Link>
        </li>
          </ul>
        </li>
       
      </ul>
      <li className="nav-item"  style={{listStyle:"none",padding:"15px"}}>
          <Link className="nav-link active" to="cart" style={{display:"flex"}}><i style={{marginTop:"8px"}} className="fa-solid fa-cart-shopping"></i> <p style={{padding:"5px"}}>{cardProducts.cartItems.length}</p></Link>
        </li>
     
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </header>
    </>
  )
}

export default Navbar
