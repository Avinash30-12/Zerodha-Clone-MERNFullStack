import React from 'react';
function RightSection({imageUrl , productName,productDesciption, learnMore}) {
    return (  
        <div className='container mt-3 p-3'>
        <div className='row'>
            <div className='col-6 p-5 mt-5'>
                  <h1 className='mt-5 p-5'>{productName}</h1>
                  <p>{productDesciption}</p>
                <div>
                  <a href={learnMore} style={{textDecoration:"none"}} >Kite Connect →</a>
                </div>
            </div>
            <div className='col-6'>
               <img src={imageUrl} style={{width:"90%", marginTop:"50px"}}img/>
            </div>
        </div>
       </div>
    );
}

export default RightSection;