import React from 'react';

function LeftSection({imageUrl , productName,productDesciption, tryDemo, learnMore,googlePlay , appStore}) {
    return (  
       <div className='container mb-3'>
        <div className='row'>
            <div className='col-6 mt-5 p-5'>
               <img src={imageUrl} img/>
            </div>
            <div className='col-6 p-5 mt-5'>
                  <h1 className='mt-5'>{productName}</h1>
                  <p>{productDesciption}</p>
                <div className='mb-3'>
                  <a href={tryDemo} style={{textDecoration:"none"}} >try Demo →</a>
                  <a href={learnMore} style={{marginLeft:"120px", textDecoration:"none"}}>learn More →</a>
                </div>
                <div>
                  <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                  <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg'/></a>
                </div>
            </div>

        </div>
       </div>
    );
}

export default LeftSection;