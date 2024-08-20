import axios from "axios"
import { useState } from "react"


const Searchdata = () => {
    const [state,setState]=useState(
        {
            id:"",
            title:'',
            price:'',
            category:'',
            description:'',
            image:''
        }
    )

    const searchData=(event)=>
    {
        let data=event.target.value
        axios.get('https://fakestoreapi.com/products/'+data)
        .then((res)=>
        {
            setState(res.data)
        })
       
    }

  
  return (
    <>
        <div className="container-fluid">
            <div className="row">
            <div className="d-flex justify-content-center py-5">
            <div><p style={{fontSize:"1.8rem"}}>Enter Your Product Id :</p></div>
               <div style={{textAlign:"center",marginTop:"5px"}}> <input name="search" onChange={searchData} style={{border:"1px solid black",padding:"5px"}} type="search" /></div>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>S.no</td>
                        <td>Title</td>
                        <td>Descripiton</td>
                        <td>Image</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td>{state.id}</td>
                        <td>{state.title}</td>
                        <td>{state.description}</td>
                        <td>
                            <img style={{width:"100px"}} src={state.image} alt="" />
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </>
  )
}

export default Searchdata
