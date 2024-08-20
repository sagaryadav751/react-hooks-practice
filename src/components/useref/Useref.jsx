import axios from "axios"
import { useRef } from "react"
const Useref = () => {
    const emailid=useRef()
    const mobnum=useRef()
    const message=useRef()
  
    
    const submitBtn=(e)=>
    {
        e.preventDefault()
        const data =
        {
            emailid:emailid.current.value,
            mobnum:mobnum.current.value,
            message:message.current.value
        }
       axios.post("http://localhost:3004/data",data)
      
   
    }

  return (
    <>
         <div className="background main-contact">
  <div className="container">
  <div className="h2 fw-bold" style={{textAlign:"center"}}><p>USEREF CONTACT FORM</p></div>
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : +62 81 314 928 595</div>
        </div>
        <form action="" onSubmit={submitBtn} >
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input name="emailid"  ref={emailid} className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input name="mobnum" ref={mobnum} className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input name="message" ref={message}  className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Useref
