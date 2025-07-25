import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                   <h1>Largest Stock broker in India</h1>
                   <p className='mb-5'>2+ Million Zerodha clients contribute to over 15% of all retail Order volumes in india daily by trading and investing in:</p>
                   <div className='row mb-3'>
                      <div className='col-6'>
                         <ul>
                             <li> <p>Future and options</p></li>
                             <li> <p>Commodity and Derivatives</p></li>
                             <li> <p>Currency derivatives</p></li>
                         </ul> 
                      </div>
                        <div className='col-6'>
                         <ul>
                             <li> <p>Stocks and IPOs</p></li>
                             <li> <p>Direct Mutual funds</p></li>
                             <li> <p>Bonds and govt. security</p></li>
                         </ul> 
                        </div>
                   </div>
                   <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;