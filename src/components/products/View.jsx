import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BarLoader } from "react-spinners"
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/Slice1";
import toast, { Toaster } from "react-hot-toast";
const View = () => {
    const[state,setState]=useState([])
    const {id}=useParams()
    const[value,setValue]=useState(false)
    const dispatch=useDispatch()
  useEffect(()=>
{
    axios.get('https://fakestoreapi.com/products/'+id).then((res)=>{setState(res.data)})
},[id])


useEffect(()=>
{
    setValue(true)
    setTimeout(()=>
{
    setValue(false)
},500)
},[])

const addToCartData=(product)=>
{
  dispatch(addToCart(product))
  toast.success('Successfully toasted!')
}
  return (
    <>
    <Toaster></Toaster>
       {
        value?
        (<div className="container">
            <div className="d-flex justify-content-center" style={{marginTop:"20rem"}}>
            <BarLoader
       
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
                </div>
            </div>):
        (
            
            
             <div className="container-fluid d-flex justify-content-center">
            <div className="col-md-10 d-flex justify-content-center">
            <div className="card mb-4" style={{maxWidth:"1040px"}} >
            
  <div className="row g-0">
    <div className="col-md-4">
    <div>
            <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: state.image
    },
    largeImage: {
        src: state.image,
        width: 1200,
        height: 1800
    }
}} />
            </div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{state.title}</h5>
        <p className="card-text">{state.description}</p>
        <p className="card-text"><small className="text-body-secondary">{state.category}</small></p>
        <button onClick={()=>{addToCartData(state)}} className="btn btn-primary"> Add to Cart</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>)
       }
    </>
  )
}

export default View
