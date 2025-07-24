import React from 'react';
function StepsToSignup() {
    return (  
    <div style={{backgroundColor:"rgba(216, 215, 215, 0.18)" , width:"100%" ,padding: "2rem 0" }}>
        <div className='container mb-3 mt-3'>
            <div className='text-center mt-4 mb-3 text-muted'>
                <h2>Steps to open a demat account with Zerodha</h2>
            </div>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src='media/images/steps-acop.svg' className='mt-3 p-3' style={{marginLeft:"220px"}}/>

                </div>
                <div className='col-6 mt-5'>
                     <h4 className='p-3 text-muted'>01. Enter the requested details</h4>
                     <hr></hr>
                     <h4 className='p-3 text-muted'>02. Complete e-sign & verification</h4>
                     <hr></hr>
                     <h4 className='p-3 text-muted'>03. Start investing!</h4>
                     <hr></hr>
                </div>
            </div>
        </div>
    </div>
    );
}

export default StepsToSignup;