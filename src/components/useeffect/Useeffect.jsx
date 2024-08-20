import { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import axios from "axios"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";




const Useeffect = () => {
    const[state,setState]=useState([])
    const[page,setPage]=useState(1)
   
  
    const getTotal=()=>{
      axios.get("http://localhost:3004/data")
      .then((res)=>{
          setState(res.data)
      })
  }
    const allData=()=>
    {
        axios.get(" http://localhost:3004/data")
            .then((res)=>
        {
            setState(res.data)
        })
    }
    const handlePage=(e,p)=>
    {
     setPage(p)
    }

    useEffect(()=>
{
  allData()
 

// eslint-disable-next-line react-hooks/exhaustive-deps
},[page])
const deleteData=(id)=>
{
    
//     .then(()=>
// {
   
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          axios.delete("http://localhost:3004/data/"+id)
          .then(()=>
        {
          getTotal()
        })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
          getTotal()
        }
      });
// })

}

  return (
    <>
       <div className="container-fluid">
        <div className="container d-flex justify-content-center">
            <div className="col-md-10 ">
            <div>current page is {page}</div>
            
            <table className="table table-dark table-striped">
                <thead>
                   <tr>
                   <td>id</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Message</td>
                    <td>Action</td>
                   </tr>
                </thead>
                <tbody>
                    {
                        state.map((item,index)=>
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.emailid}</td>
                                <td>{item.mobnum}</td>
                                <td>{item.message}</td>
                                <td>
                                <Stack direction="row" spacing={2}>
      <Button  onClick={()=>{deleteData(item.id)}} sx={{backgroundColor:"red",color:"white"}} variant="outlined" startIcon={<DeleteIcon sx={{color:"white"}} />}>
        Delete
      </Button>
      <Link to={`/edit/${item.id}`}>
      <Button   sx={{backgroundColor:"green"}} variant="contained" endIcon={<SendIcon sx={{color:"white"}} />}>
         Edit
      </Button>
      </Link>
    </Stack>
                                    
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <div>
            <Pagination onChange={handlePage} count={4} color="secondary" />
            </div>
            </div>
            
        </div>
       </div>
    </>
  )
}

export default Useeffect
