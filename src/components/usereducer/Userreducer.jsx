import { useReducer } from "react"

const initial=0
const reducer=(state,action)=>
{
    if(action.type==="INCREMENT")
    {
        return state+1
    }
    if(action.type==="DECREMENT")
    {
        return state-1
    }
}
const Userreducer = () => {
    const [state,dispatch]=useReducer(reducer,initial)

  return (
    <>
        <div className="container-fluid">
            <div className="container d-flex justify-content-center py-5">
                <div className="d-flex py-3">
                    <button onClick={()=>{dispatch({type:"DECREMENT"})}} className="btn btn-primary">-</button>
                    <span><p style={{border:"1px solid black",marginTop:"12px",padding:"8px"}}>{state}</p></span>
                    <button onClick={()=>{dispatch({type:"INCREMENT"})}} className="btn btn-primary">+</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Userreducer
