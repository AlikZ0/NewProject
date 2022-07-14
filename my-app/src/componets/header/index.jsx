
import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./style.css"


const Flew = () => {
    return <div>
        <div className="G-flex G-cont">
        <li className='P-art '><Link to={'/'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="L-art Font_30 ">Flew</Link><span>&#10561;</span></li>
        
        <ul className='G-art G-flex'>
            <li className='P-art'><Link to={'/users1'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="L-art Font_18">Work</Link></li>
            <li className='P-art'><Link to={'/users2'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="L-art Font_18"> Services</Link></li>
            <li className='P-art'><Link to={'/users3'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="L-art Font_18">Pricing</Link></li>
            <li className='P-art'><Link to={'/users4'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="L-art Font_18">About</Link></li>
            <li className='P-art'><Link to={'/users4'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="L-art Font_18">Contact</Link></li>
            
            {/* <li className='P-art L-arts'><Link to={'/users4'} style={{ paddingLeft: 13, textDecoration: 'none' }} className="">Get started</Link></li> */}
        </ul>
        </div>
        {/* <Routes>
      <Route path={'/users1'} element={<User1/>}></Route>
      <Route path={'/users2'} element={<User2/>}></Route>
      <Route path={'/users3'} element={<User3/>}></Route>
      <Route path={'/users4'} element={<User4/>}></Route>
       <Route path={'/create-users'} element={App}></Route> 
    </Routes> */}
    </div>

}
export default Flew