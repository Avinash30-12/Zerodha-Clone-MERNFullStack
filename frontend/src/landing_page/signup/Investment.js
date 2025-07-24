import React from 'react';
import {Link} from 'react-router-dom'
function Investment() {
  
  const handleSignupClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    };

    return ( 
        <div>
            <div className='text-center text-muted mt-5 p-3'>
                <h3>Investment options with Zerodha demat account</h3>
            </div>
            <div className='row mt-5'>
            <div className='col-6 mb-3 p-3'>
                <div className="d-flex align-items-center" style={{marginLeft:"220px"}}>
                   <img src='media/images/stocks-acop.svg' alt="stocks" width="150" height="150" className="me-3" />
                   <div>
                     <h4 className="mb-3 text-muted">Stocks</h4>
                     <p className="mb-2 text-muted">Invest in all exchange-listed<br></br> securities</p>
                   </div>
                </div>
                <div className="d-flex align-items-center mt-3" style={{marginLeft:"220px"}}>
                   <img src='media/images/ipo-acop.svg' alt="stocks" width="150" height="150" className="me-3" />
                   <div>
                     <h5 className="mb-3 text-muted">IPO</h5>
                     <p className="mb-2 text-muted">Apply to the latest IPOs instantly <br></br> via UPI</p>
                   </div>
                </div>
            </div>
            <div className='col-6 mt-3 mb-3 p-3'>
                 <div className="d-flex align-items-center" style={{marginLeft:"70px"}}>
                   <img src='media/images/mf-acop.svg' alt="stocks" width="150" height="150" className="me-3" />
                   <div>
                     <h5 className="mb-3 text-muted">Mutual Funds</h5>
                     <p className="mb-2 text-muted">Invest in commission-free<br></br> direct mutual funds</p>
                   </div>
                </div>
                <div className="d-flex align-items-center mt-3" style={{marginLeft:"70px"}}>
                   <img src='media/images/fo-acop.svg' alt="stocks" width="150" height="150" className="me-3" />
                   <div>
                     <h5 className="mb-3 text-muted">Futures & options</h5>
                     <p className="mb-2 text-muted">Hedge and mitigate market risk <br></br>through simplified F&O trading</p>
                   </div>
                </div>
            </div>
            </div>
            <div className='text-center mt-3 mb-5'>
                <Link to="/product" onClick={handleSignupClick}>
                <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:"20%", margin:"0 auto"}}>Explore Investments</button>
                </Link>
            </div>
        </div>
     );
}

export default Investment;