    import { useMemo } from "react"
import { useState } from "react"




const Usememo = () => {
    const[value,setValue]=useState(0)
    const[color,setColor]=useState("Blue")
    const[colors,setColors]=useState("Orange")
    const getvalue=()=>
    {
        return setValue(value+1)
    }


    const countNumber=(num)=>
    {
        // eslint-disable-next-line no-empty
        for(let i=1;i<1000000000;i++){}
        return num
    }
    // const total_count=countNumber(value)

        const total_count=useMemo(()=>
    {
        return countNumber(value)
    },[value])


    const changeColor=()=>
    {
        setColor("Mahroon")
    }
    const changeColors=()=>
    {
        setColors("Green")
    }
  return (
    <>
        <div className="container-fluid">
            <div className="container py-5">
            <div style={{textAlign:"center"}}>
            <p>Total Count</p>
                        {total_count}
                    </div>
                <div className="memo py-1 d-flex justify-content-center" style={{gap:"2rem"}}>
                    <div className="firstmemo">
                        <div><p style={{border:"1px solid black",fontSize:"1.5rem",textAlign:"center"}}>{value}</p></div>
                        <div><button onClick={getvalue} className="btn btn-primary">Get Value</button></div>
                    </div>
                    <div className="secondmemo">
                    <div><p style={{border:"1px solid black",fontSize:"1.5rem",textAlign:"center"}}>{color}</p></div>
                        <div><button onClick={changeColor} className="btn btn-primary">Change Color</button></div>
                    </div>
                    <div className="thirdmemo">
                    <div><p style={{border:"1px solid black",fontSize:"1.5rem",textAlign:"center"}}>{colors}</p></div>
                        <div><button onClick={changeColors} className="btn btn-primary">Change Colors</button></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Usememo
