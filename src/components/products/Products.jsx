import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom"
import { useSearchParams } from "react-router-dom";
import { addToCart } from "../../store/slices/Slice1";
import toast, { Toaster } from "react-hot-toast";



const Products = () => {
    const [category,setCategory]=useState([])
    const[state,setState]=useState([])
    const [searchParams] = useSearchParams();
    const query = searchParams.get("cate_data");
    // console.log("query:", query);    
    const dispatch=useDispatch()
    //useSearchParams is not working i dont know why i fix it in future
const getAllCategory=()=>
{
    axios.get('https://fakestoreapi.com/products/categories')
    .then((res)=>
{
    setCategory(res.data)
})
}
const getAllProducts=()=>
{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>
{
    setState(res.data)
})
}
const setData=(cate_data)=>
{
  axios.get('https://fakestoreapi.com/products/category/'+cate_data)
  .then((res)=>
{
   
    setState(res.data)
})
}

const allCate=()=>
{
    axios.get('https://fakestoreapi.com/products').then((res)=>{setState(res.data)})
}



    useEffect(()=>
{
    getAllCategory()
    getAllProducts()
    if(query!=null)
    {
        setData(query)
    }
},[query])

const addToCartData=(product)=>
{
  dispatch(addToCart(product))
  toast.success('Successfully toasted!')
}

  return (
    <>
    <Toaster></Toaster>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3" style={{marginTop:"1rem"}}>
                <div>
                <button onClick={()=>{allCate()}} className="btn btn-primary" style={{width:"100%",border:"1px solid black",margin:"5px"}} >All Categories</button>
                </div>
                    {
                        category.map((cate_data,index)=>
                          <div key={index} >
                          <button onClick={()=>{setData(cate_data)}} className="btn btn-primary" style={{width:"100%",border:"1px solid black",margin:"5px"}} >{cate_data}</button>
                          </div>
                        )
                    }
                </div>
                <div className="col-md-9">
                        <div className="row">
                            {
                                state.map((item,index)=>
                                <div className="col-md-3" key={index}>
                                <div className="card" style={{width:"17rem",height:"30rem",marginTop:"1rem"}}>
                            <img style={{height:"15rem",objectFit:"contain"}} src={item.image} className="card-img-top" alt={item.category.substring(1,12)}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title.substring(0,20)}</h5>
                                <p className="card-text" style={{height:"8rem"}}>{item.description.substring(0,120)}</p>
                                <div className="d-flex justify-content-between" >
                                <Link to="#" onClick={()=>{addToCartData(item)}}  className="btn btn-primary">Add to Cart</Link>
                                <Link to={`/view/${item.id}`} className="btn btn-success">View </Link>
                                </div>
                            </div>
                            </div>
                                </div>
                                )
                            }
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products
