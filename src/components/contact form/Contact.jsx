import { useState } from "react"
import "./contact.css"
import axios from "axios"

const Contact = () => {
    const[state,setState]=useState(
        {
            emailid:"",
            mobnum:"",
            message:""
        }
    )
    const handler=(event)=>
    {
        const{name,value}=event.target
        setState({...state,[name]:value})
    } 
    const submitBtn=(e)=>
    {
        e.preventDefault()
        axios.post("http://localhost:3004/data",state)
        .then((res)=>
    {
        console.log(res)
    })
       
    }
  return (
    <>
        <div className="background main-contact">
  <div className="container">
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
        <form action="" onSubmit={submitBtn}>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input name="emailid" onChange={handler} className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input name="mobnum" onChange={handler} className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input name="message" onChange={handler} className="app-form-control" placeholder="MESSAGE"/>
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

export default Contact
