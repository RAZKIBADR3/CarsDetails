import React from 'react';
import Data from './Data';
import Cars from './Component/Cars';
import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Car from './Component/Car';

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Cars Data={Data}/>}/>
        <Route path='Car/:ref' element={<Car Data={Data}/>}/>
      </Routes>
    </Router>
  )
}