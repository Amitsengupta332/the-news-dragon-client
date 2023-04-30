import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, repudiandae esse aliquid consequatur odit ratione quae magnam. Dolore, illum! Sunt!</p>

            <p> <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;