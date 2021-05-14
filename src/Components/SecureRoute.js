import React from "react";
import { Route, useRouteMatch, Redirect } from "react-router-dom";

export default function Secureroute(props) {
  return (
    <Route
      path={props.path}
      render={(data) =>   
        props.auth.getLoginStatus() ? (
          <props.component {...data} />
        ) : (
          <Redirect to={{ pathname: "/login", auth: props.auth }} />
        )
      
      }
    />
  );
}


/* 
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
*/
/* 
 <props.component :  render specific component by accessing props.component and pass data throgh spread 
 operator
*/


