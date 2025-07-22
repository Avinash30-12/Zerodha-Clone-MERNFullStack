import React from 'react';
function Hero() {
    return ( 
        <div className='container border-bottom mb-5 p-5'>
            <div className='row text-center mt-5 mb-5'>
                <h1 className='fs-3 text-muted'>Zerodha Products</h1>
                <h3 className='text-muted mt-2 fs-5 mb-3'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='mb-7'>Check out our <a href='/' style={{textDecoration:"none", marginBottom:"60px"}}>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;