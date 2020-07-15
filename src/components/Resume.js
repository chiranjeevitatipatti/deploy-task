import React from 'react';
import data from '../data.json';
import Logo from '../img.jpg'




export default function resume(props) {
    fetch("https//jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>console.log(data))
    let info =data.profiles[props.location.profilesData.i]
    console.log(info.basic)
    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card">
                    <div className="card-body">
                      <img src={Logo} alt="profile Icon" style={{width:"10em"}}/>
                     <h1>{info.basic.name}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
} 