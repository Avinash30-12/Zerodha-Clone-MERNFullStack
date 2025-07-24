import React from 'react';
function Benifits() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5 p-3'>
                      <div className='mt-5 p-3'>
                        <img src='media/images/acop-benefits.svg' style={{width:"70%" , marginLeft:"100px"}}/>
                        <h3 className='text-muted text-center'>Benefits of opening a Zerodha demat account</h3>
                      </div>
                </div>
                <div className='col-6 mt-5 p-4'>
                      <div>
                        <h4 className='text-muted mb-4'>Unbeatable pricing</h4>
                        <p className='text-muted mb-5'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for<br></br> intraday and F&O trades.</p>
                      </div>
                      <div>
                        <h4 className='text-muted mb-4'>Best investing experience</h4>
                        <p className='text-muted mb-5'>Simple and intuitive trading platform with an easy-to-understand user<br></br> interface.</p>
                      </div>
                      <div>
                        <h4 className='text-muted mb-4'>No spam or gimmicks</h4>
                        <p className='text-muted mb-5'>Committed to transparency — no gimmicks, spam, "gamification", or<br></br> intrusive push notifications.</p>
                      </div>
                      <div>
                        <h4 className='text-muted mb-4'>The Zerodha universe</h4>
                        <p className='text-muted mb-3'>More than just an app — gain free access to the entire ecosystem of<br></br> our partner products.</p>
                      </div>
                </div>
            </div>
        </div>
     );
}

export default Benifits;