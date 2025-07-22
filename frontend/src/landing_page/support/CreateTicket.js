import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-3 mb-5'>
              <h1 className='fs-2 mb-3'>To Create a ticket, Select a relevant topic</h1>
           <div className='col-5 p-3 mt-2 mb-2'>
              <h4 className=''><i class="fa-solid fa-circle-plus"></i> Account Openning</h4>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Online Account Opening</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Offline Account Opening</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUF Account</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Opening</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>NRI Account Opening</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Charges at Zerodha</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Getting Started</a><br></br>
            </div>
            <div className='col-4 p-3 mt-2 mb-2'>
              <h4 className=''><i class="fa-solid fa-chart-simple"></i> Your Zerodha Account</h4>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Login Credentials</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Account Modification and Segment Addition</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>DP ID and bank details</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br></br>
            </div>
            <div className='highlight-box col-3 mt-3'>
                <ul  style={{borderLeft: '8px solid #f7931e',backgroundColor: '#fff7f0',}}>
                    <li className='p-3'><a href='/'>Quarterly Settlement of Funds - July 2025</a></li>
                    <li className='p-3'><a href='/'>Exclusion of F&O contracts on 8 securities from August 29, 2025</a></li>
                </ul>
            </div>
            <div className='col-5 p-3 mt-2 mb-2'>
              <h4 className=''><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Margin/leverage, Product and Order types</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite Web and Mobile</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQS</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate Actions</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Sentinel</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite API</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Pi and other platform</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Stockreports+</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>GTT</a><br></br>
            </div>
            <div className='col-4 p-3 mt-2 mb-2'>
              <h4 className=''><i class="fa-solid fa-circle-notch"></i> Console</h4>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Segments</a><br></br>
            </div>
            <div className='col-3'>
                <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action p-3" aria-current="true" style={{backgroundColor:"rgba(139, 137, 137, 0.18)"}}>
                 Quick links
                </button>
                <button type="button" class="list-group-item list-group-item-action p-4"><a href='/' style={{textDecoration:"none"}}>1. Track account opening</a></button>
                <button type="button" class="list-group-item list-group-item-action p-4"><a href='/' style={{textDecoration:"none"}}>2. Track segment activation</a></button>
                <button type="button" class="list-group-item list-group-item-action p-4"><a href='/' style={{textDecoration:"none"}}>3. Intraday margins</a></button>
                <button type="button" class="list-group-item list-group-item-action p-4"><a href='/' style={{textDecoration:"none"}}>4. Kite user manual</a></button>
              </div>
            </div>
            <div className='col-5 p-3 mt-5 mb-2'>
              <h4 className=''><i class="fa-solid fa-indian-rupee-sign"></i> Funds</h4>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Add money</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Withdraw money</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Add bank accounts</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a><br></br>
            </div>          
            <div className='col-5 p-3 mt-5'>
              <h4 className=''><i class="fa-solid fa-coins"></i> Coins</h4>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Mutual funds</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Fixed Deposit (FD)</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Features on Coin</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>Payments and Orders</a><br></br>
                <a href='/' style={{textDecoration:"none", lineHeight:"2.5"}}>General</a><br></br>
            </div>
        </div>
    </div>
     );
}

export default CreateTicket;