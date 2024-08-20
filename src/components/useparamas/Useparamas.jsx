import { useParams } from "react-router-dom"


const Useparamas = () => {
  const{id}=useParams()
  return (
    <>
        {id}
       <div className="container-fluid">
        <div className="container">
          <div className="usepara">
          <p>It is only use for access id it access direct id from url so if url have no unique id so use params not work</p>
          </div>
        </div>
       </div>
    </>
  )
}

export default Useparamas
