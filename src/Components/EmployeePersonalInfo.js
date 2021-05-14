import React,{useEffect,useState} from 'react'
import {useParams,useRouteMatch, Switch,Link,Route} from 'react-router-dom'
import axios from 'axios'

export default function Employeepersonalinfo() {
    
    const [user,setUser] = useState({})

    const {id} = useParams();
   // // We can use the `useParams` hook here to access
   // the dynamic pieces of the URL.

   useEffect(()=>{   
         axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)        
              .then(res=>{                  
                  setUser(res.data)
              })
              .catch(err=>{
                  console.log(err)
              })
     },[]) 

   function changeEmployeeData(event){

   }
   return (
       <div>
            <h2>Employee Details....</h2>
       <p>
         <label>
           Employee ID:{" "}
           <input
             type="text"
             name="Id"
             value={user.id || ""}
             onChange={changeEmployeeData}
           ></input>
         </label>
       </p>
       <p>
         <label>
           Employee Name:{" "}
           <input
             type="text"
             name="Id"
             value={user.name || ""}
             onChange={changeEmployeeData}
           ></input>
         </label>
       </p>
       <p>
         <label>
           Employee Email:{" "}
           <input
             type="text"
             name="Id"
             value={user.email || ""}
             onChange={changeEmployeeData}
           ></input>
         </label>
       </p>
       <p>
         <label>
           Employee Username:{" "}
           <input
             type="text"
             name="Id"
             value={user.username || ""}
             onChange={changeEmployeeData}
           ></input>
         </label>
       </p>
       <button>Update</button>
       </div>
   )
}
