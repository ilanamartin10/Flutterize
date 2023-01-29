import friend_data from "./friend_data.js"
import Post from "./post.js"
import { Link } from "react-router-dom"

import React from 'react'



function dashboard() {
return (
<div className="d-flex justify-content-center align-items-center gradient-custom">
    <div className="container">
        <div className="row">
         <h1> <font color="white">Welcome to Jenna's Dashboard </font></h1>
            {/* <Post className="col-sm" data={{ prompt: "Take a selfie with a stranger!", img: localStorage.getItem('img')}} /> */}
            {friend_data.map(old_post => (
            <div className="col-sm d-flex justify-content-center pb-2">
                 <Post data={{ prompt: old_post.prompt, img:old_post.img}} />
            </div>
            ))}
               <Link to="/">
               <button className="btn btn-outline-light btn-lg px-5" type="submit">Go Back</button> 
               </Link>
        </div>
    </div>
</div>

        )
}

export default dashboard