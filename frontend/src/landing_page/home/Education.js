import React from 'react'

function Education() {
    return (
        <div className='container mt-5 px-5'>
            <div className='row px-5'>
                <div className='col-6 px-3'>
                    <img src='media/images/education.svg' style={{width:"75%"}}></img>
                </div>
                <div className='col-6 mt-3'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world <br/> covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in <br/>India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
            </div>
        </div>
    );
}

export default Education;