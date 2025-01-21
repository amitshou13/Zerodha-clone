import React from 'react'

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className='container p-5'>
            <div className='row px-5' style={{lineHeight:1.8}}>
                <div className='col-4 py-5 px-4 mt-5 align-self-center'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}{" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className='col-1'></div>

                <div className='col-6 px-4'>
                    <img src={imageURL} style={{width:"120%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;