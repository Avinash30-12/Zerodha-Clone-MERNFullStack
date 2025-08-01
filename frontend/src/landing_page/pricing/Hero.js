import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Charges</h1>
                <h3 className='text-muted mt-3 mb-5 fs-4'>List of all charges and taxes</h3>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/pricing-eq.svg' style={{width:"60%"}}/>
                    <h1 className='mt-3 p-3 fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/intradayTrades.svg'  style={{width:"60%"}}/>
                    <h1 className='mt-3 p-3 fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <img src='media/images/pricing-eq.svg' style={{width:"60%"}}/>
                    <h1 className='mt-3 p-3 fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;