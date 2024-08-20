import { useNavigate } from "react-router-dom"
import "./navigate.css"

const Usenavigate = () => {
    const navigate=useNavigate()
    const goPage=()=>
    {
         navigate("/useref")
    }
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="main">
                    <button onClick={goPage} className="btn btn-success">Use to Go on Another Page</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Usenavigate
