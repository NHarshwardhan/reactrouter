import React from 'react'

export default function Profile(props) {

    function showNextPage(){
        props.history.push('/projects')
    }
    /* 
    Our history object has complete stack 
    click on back button on browser
    */
    return (
        <div>
            <h3>Welcome To My Profile</h3>
            <button onClick={showNextPage} >Next</button>
        </div>
    )
}
