// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// import {useParams} from 'react-router-dom'
// export default function Editemployee() {
//     const [user,setUser] = useState({})

//      const {id} = useParams();
//     // // We can use the `useParams` hook here to access
//     // the dynamic pieces of the URL.

//     useEffect(()=>{    
//           axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)        
//                .then(res=>{                  
//                    setUser(res.data)
//                })
//                .catch(err=>{
//                    console.log(err)
//                })
//       },[]) 

//     function changeEmployeeData(event){

//     }
//     return (
//         <div>
//              <h2>Employee Details....</h2>
//         <p>
//           <label>
//             Employee ID:{" "}
//             <input
//               type="text"
//               name="Id"
//               value={user.id || ""}
//               onChange={changeEmployeeData}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Name:{" "}
//             <input
//               type="text"
//               name="Id"
//               value={user.name || ""}
//               onChange={changeEmployeeData}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Email:{" "}
//             <input
//               type="text"
//               name="Id"
//               value={user.email || ""}
//               onChange={changeEmployeeData}
//             ></input>
//           </label>
//         </p>
//         <p>
//           <label>
//             Employee Username:{" "}
//             <input
//               type="text"
//               name="Id"
//               value={user.username || ""}
//               onChange={changeEmployeeData}
//             ></input>
//           </label>
//         </p>
//         <button>Update</button>
//         </div>
//     )
// }



//---------------------------
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,useRouteMatch, Switch,Link,Route} from 'react-router-dom'
import Employeepersonalinfo from './EmployeePersonalInfo'
import Employeesalaryinfo from './EmployeeSalaryInfo'
import Employeeprojectinfo from './EmployeeProjectInfo'

export default function Editemployee() {
    let { path, url } = useRouteMatch();
    console.log(path,url)
    /* 
     // The `path` lets us build <Route> paths that are
        // relative to the parent route, while the `url` lets
        // us build relative links.
    */

 
    return (
        <div>
            <Link to={`${url}`}>Personal</Link>&nbsp;&nbsp;
            <Link to={`${url}/salary`}>Salary</Link>&nbsp;&nbsp;
            <Link to={`${url}/projects`}>Projects</Link>
            <Switch>
            <Route exact path={`${path}`} component={Employeepersonalinfo}></Route>
            <Route  path={`${path}/salary`} component={Employeesalaryinfo}></Route>
            <Route  path={`${path}/projects`} component={Employeeprojectinfo}></Route>    
           
            </Switch>
        </div>
    )
}
