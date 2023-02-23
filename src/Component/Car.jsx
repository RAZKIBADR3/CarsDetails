import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

export default function Car({Data}){
    const {ref} = useParams()
    const obj = Data.find(e=>e.ref==ref)
    return(
        <div style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0)) , url('../img/bg/bg${ref}.jpg')`}} className="container">
            <Header/>
            <div className='cars'>
                <div className="car" style={{width:'550px',minHeight:'75vh'}}>
                    <div style={{backgroundImage:`url('../img/cars/car${ref}.jpg')`,height:'24vh'}} className="img"></div>
                    <div className="text" style={{padding:'20px',minHeight:'55vh'}}>
                        <span className='pro'>Name</span>
                        <span className='val'>{obj.name}</span>
                        <span className='pro'>Company</span>
                        <span className='val'>{obj.company}</span>
                        <span className='pro'>class</span>
                        <span className='val'>{obj.class}</span>
                        <span className='pro'>description</span>
                        <span className='val'>{obj.desc}</span>
                        <span className='pro'>country</span>
                        <span className='val'>{obj.country}</span>
                        <span className='pro'>Seating For</span>
                        <span className='val'>{obj.SeatingFor}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}