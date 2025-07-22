import React from 'react';
function Brokerage() {
    return ( 
        <div className='container border-top'>
            <div className='row p-3 mt-5 text-center'>
                <div className='col-8 p-3'>
                    <a href='/' style={{textDecoration:"none"}}><h4 className='m-5' style={{textAlign:"left"}}>Brokerage Calculator</h4></a>
                    <ul style={{textAlign:"left" , lineHeight:"2.5" ,}} className='text-muted fs-6'>
                        <li> Call & Trade and RMS auto-squareoff: Additional charges of 250 + GST per order.</li>
                        <li> Digital contract notes will be sent via e-mail.</li>
                        <li> Physical copies of contract notes, if required, shall be charged &20 per contract note. Courier charges apply.</li>
                        <li> For NRI account (non-PIS), 0.5% or Rupees 7100 per executed order for equity (whichever is lower).</li>
                        <li> For NRI account (PIS), 0.5% or Rupees 200 per executed order for equity (whichever is lower).</li>
                        <li> If the account is in debit balance, any order placed will be charged ₴40 per executed order instead of 720 per executed order.</li>
                    </ul>
                </div>
                 <div className='col-4 p-3'>
                    <a href='/' style={{textDecoration:"none"}} ><h4 className='m-5'>List of Charges</h4></a>
                </div>

            </div>
        </div>
     );
}

export default Brokerage;