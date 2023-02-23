import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Cars({Data}){
    return(
        <div className="container">
            <Header/>
            <div className='cars'>
                {Data.map(e=>
                    <div key={e.ref} className="car">
                        <div style={{backgroundImage:`url('img/cars/car${e.ref}.jpg')`}} className="img"></div>
                        <div className="text">
                            <span className='pro'>Name</span>
                            <span className='val'>{e.name}</span>
                            <span className='pro'>Company</span>
                            <span className='val'>{e.company}</span>
                            <span className='pro'>class</span>
                            <span className='val'>{e.class}</span>
                            <span className='pro'>description</span>
                            <span className='val'>{e.desc.slice(0,80)}...</span>
                        </div>
                        <span className="hr"></span>
                        <Link to={`Car/${e.ref}`}>Details</Link>
                    </div>
                )}
            </div>
        </div>
    )
}