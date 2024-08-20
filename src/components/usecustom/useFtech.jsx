

import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const useFtech = (url) => {
    const[state,setState]=useState([])
    useEffect(()=>
  {
    axios.get(url)
    .then((res)=>
  {
    setState(res.data)
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    
           return [state]
}

export default useFtech
