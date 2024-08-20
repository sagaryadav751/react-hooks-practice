import { useContext } from "react"
import { data } from "../../App"
import "./contextapi.css"


const Usecontext = () => {
    const newdata=useContext(data)
    let message="Context Api is False"
  return (
   <>
      {
        newdata? ( <div className="container-fluid main ">
                      <p>I am Show Only When Context Api is True</p>
                  </div>):(message)
      } 
   </>
  )
}

export default Usecontext
