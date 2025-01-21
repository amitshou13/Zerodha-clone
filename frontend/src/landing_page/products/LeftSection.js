import React from 'react'

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container px-5 pt-5'>
            <div className='row px-5' style={{lineHeight:1.8}}>
                <div className='col-6 py-4 px-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-2'></div>
                <div className='col-4 py-4 px-4 align-self-center'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p className='mt-4'>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>{tryDemo}{" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>{learnMore}{" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='my-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' style={{width:"45%"}}/></a>
                        <a href={appStore} style={{marginLeft:"30px"}}><img src='media/images/appstoreBadge.svg' style={{width:"40%"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;