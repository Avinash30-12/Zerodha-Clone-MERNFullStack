import React from 'react';

function Hero() {
    return ( 
     <div className='container'>
            <div className='text-center p-5 mb-5 mt-5'>
                <h2 className='mb-2 p-3 text-muted'>Open a free demat and trading account online</h2>
                <h4 className='text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
            </div>
        <div className='row text-center mt-5'>
            <div className='col-6 text-end'>
               <img src='media/images/account_open.svg' style={{width:"85%"}} alt="account opening" />
            </div>

            <div className='col-5 mt-5' style={{textAlign:"left"}}>
                <form>
                    <div className="mb-4">
                      <label htmlFor="exampleInputEmail1" className="form-label">Enter @Username</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p className='mt-3 p-3 fs-7'>By proceeding, you agree to the Zerodha <a href='/PricingPage' style={{textDecoration:"none"}}>terms & privacy policy</a></p>
            </div>
        </div>
        </div>
    );
}

export default Hero;
