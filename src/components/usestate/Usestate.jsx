import { useState } from "react"


const Usestate = () => {
    const[state,setState]=useState(0)
  return (
    <>
        <div className="container-fluid">
            <div className="container">
                <div className="main-state">
                    <button onClick={()=>{setState(state-1)}} className="btn btn-primary">-</button>
                    <span className="state-p"><p>{state}</p></span>
                    <button onClick={()=>{setState(state+1)}} className="btn btn-primary">+</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Usestate
