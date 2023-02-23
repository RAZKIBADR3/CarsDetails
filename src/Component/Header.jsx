import React from "react";
import { Link } from "react-router-dom";

export default function header(){
    const nav = [
        {id:0,text:'Services'},
        {id:1,text:'Community'},
        {id:2,text:'Contact Us'},
        {id:3,text:'About'}
    ]
    return(
        <header>
            <div className="headLeft">
                <Link to='/CarsDetails/'>SportCars</Link>
            </div>
            <div className="headMidlle">
                {nav.map(e=><span key={e.id}>{e.text}</span>)}
            </div>
            <div className="headRight">
                <button>Sign Up</button>
                <button>Register</button>
            </div>
        </header>
    )
}