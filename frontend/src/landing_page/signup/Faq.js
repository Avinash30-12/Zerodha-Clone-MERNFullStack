import React from 'react';
function Faq() {
    return (  
    <div style={{backgroundColor:"rgba(216, 215, 215, 0.18)" , width:"100%" ,padding: "2rem 0" }}>
        <div className='container'>
           <h1>FAQs</h1>
           <hr></hr>
           <div class="">
               <h4 class=" dropdown-toggle" type="p" data-bs-toggle="dropdown" aria-expanded="false">
                 What is a Zerodha account?
               </h4>
               <ul class="dropdown-menu">
                 <li>A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.</li>
               </ul>
             </div>
             <br></br>
             <br></br>
             <div class="">
               <h4 class=" dropdown-toggle" type="" data-bs-toggle="dropdown" aria-expanded="false">
                 What documents are required to open a demat account?
               </h4>
               <ul class="dropdown-menu">
                <li>The following documents are required to open a Zerodha account online:</li>
                <li>1.PAN number</li>
                <li>2.Aadhaar Card (Linked with a phone number for OTP verification)</li>
                <li>3.Cancelled cheque or bank account statement (To link your bank account)</li>
                <li>4.Income proof (Required only if you wish to trade in Futures & options)</li>
               </ul>
             </div>
             <br></br>
             <br></br>
            <div class="">
               <h4 class=" dropdown-toggle" type="" data-bs-toggle="dropdown" aria-expanded="false">
                 Is Zerodha account opening free?
               </h4>
               <ul class="dropdown-menu">
                 <li>Yes, It is completely free.</li>
               </ul>
             </div>
             <br></br>
             <br></br>
             <div class="">
               <h4 class=" dropdown-toggle" type="" data-bs-toggle="dropdown" aria-expanded="false">
                 Are there any maintenance charges for a demat account?
               </h4>
               <ul class="dropdown-menu">
                 <li>The account maintaince charges is appliacable based on the account type.</li>
                     <li>For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000.</li>
                     <li>For non-Basic Services Demat Account demat accounts: ₹300 per year + GST.</li>
                     <li>To learn more about BSDA, </li>
               </ul>
             </div>
             <br></br>
             <br></br>
             <div class="">
               <h4 class=" dropdown-toggle" type="" data-bs-toggle="dropdown" aria-expanded="false">
                Can I open a demat account without a bank account?
               </h4>
               <ul class="dropdown-menu">
                 <li>To open a demat account, you must have a bank account in your name.</li>
                 <li>If UPI verification is completed successfully, no proof of bank is needed.</li>
                    <li> However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</li>
               </ul>
             </div>
             <br></br>
             <br></br>
        </div>
        </div>
    );
}

export default Faq;