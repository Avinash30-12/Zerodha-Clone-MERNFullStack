import React from 'react';
function Universe() {
    return (  
    <div className='container mt-5 p-3'>
    <div className='row text-center'>
        <h1 className='text-muted mb-3'>The Zerodha Universe</h1>
        <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            <div className='col-4 mt-5 p-3'>
                <div>
                <img src='media/images/smallcaseLogo.png' style={{width:"300px",padding:"10px"}} img/>
                <p className='text-small text-muted p-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                <img src='media/images/zerodhaFundhouse.png' style={{width:"250px",padding:"10px" ,marginTop:"20px"}} img/>
                <p className='text-small text-muted p-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
            </div>
            <div className='col-4 mt-5 p-3'>
                <div>
                <img src='media/images/streakLogo.png' style={{width:"250px",padding:"10px"}} img/>
                <p className='text-small text-muted p-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                <img src='media/images/tijori.svg' style={{width:"250px" ,padding:"10px"}} img/>
                <p className='text-small text-muted p-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div>
            <div className='col-4 mt-5 p-3'>
                <div>
                <img src='media/images/dittoLogo.png' style={{width:"250px", padding:"10px"}}img/>
                <p className='text-small text-muted p-3'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                <img src='media/images/sensibullLogo.svg' style={{width:"250px" ,padding:"10px"}} img/>
                <p className='text-small text-muted p-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FIl/DII, and more.</p>
                </div>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:"20%", margin:"0 auto"}}>Signup for free</button>
        </div>
    </div>
    );
}

export default Universe;