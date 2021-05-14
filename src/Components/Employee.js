import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';

export default function Employee() {
    console.log('Employee Component loaded')
    const [users,setUsers] = useState([])
    useEffect(()=>{
          axios.get('http://jsonplaceholder.typicode.com/users')        
               .then(res=>{                  
                   setUsers(res.data)
               })
               .catch(err=>{
                   console.log(err)
               })
      },[]) 
      /* 
      If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ( [] ) as a second argument. This tells React that your effect doesn't depend on any values from props or state, so it never needs to re-run.
      */
    return (
        <div>
        <table align="center" border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
                users.length  ? users.map(user => (            
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                          <Link to={'/employee/'+user.id}>Edit</Link>
                                        </td>
                                    </tr>
                        )         )
                : null
             }
          </tbody>
        </table>
        </div>
    )
}
