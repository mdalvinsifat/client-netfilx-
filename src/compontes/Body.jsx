import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Regiser from './Regiser';

const Body = () => {
    return (
       <>
       <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Regiser/>} />
       </Routes>
       </>
    );
};

export default Body;