import useFtech from "./useFtech"





const Usecustom = () => {
  const[data]=useFtech("https://jsonplaceholder.typicode.com/posts")
  return (
    <div>
        <div className="container-fluid">
          <div className="container">
          <div className="py-5" style={{textAlign:"center",fontSize:"2.5rem"}}>
            These Data is Get From Custom Hook its Name useFtech
          </div>
            <div>
              {
                data.map((item,index)=>
                <div key={index}>
                  <p>{item.title}</p>
                </div>
                )
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Usecustom
