import React from 'react';
function Hero() {
    return ( 
<div style={{backgroundColor:"rgba(216, 215, 215, 0.18)" , width:"100%" ,padding: "2rem 0" }}>
   <div className='container mb-3'>
            <div className='row'>
                <div className='col-3'>
                    <h1 className='text-muted'>Support Portal</h1>
                </div>
                <div className='col-6'>

                </div>
                <div className='col-3'>
                   <button className='p-1 btn btn-primary'style={{width:"40%" , marginLeft:"170px"}}><a href='/' style={{color:"white", textDecoration:"none"}}><i class="fa-solid fa-bullseye"></i> My Tickets</a></button>
                </div>
            <div className='mb-3'>
                <form class="d-flex mt-5" role="search">
                  <input class="form-control me-2" type="search" placeholder="Eg: How do I activate F&O..." aria-label="Search" style={{height:"50px"}}/>
                </form>
            </div>
        </div>
    </div>
    </div>
 );
}

export default Hero;