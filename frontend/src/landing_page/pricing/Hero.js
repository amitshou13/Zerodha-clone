import React from 'react'

function Hero() {
    return (
        <div className='container p-3'>
            <div className='text-center mt-5 p-5 '>
                <h1>Charges</h1>
                <p className='text-muted fs-5 mt-3'>List of all charges and taxes</p>
            </div>

            <div className='row p-5 text-center' style={{lineHeight:1.8}}>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' style={{width:"90%"}}/>
                    <h1 className='fs-3 py-4'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 py-5 px-4'>
                    <img src='media/images/intradayTrades.svg' style={{width:"78%"}}/>
                    <h1 className='fs-3 py-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' style={{width:"90%"}}/>
                    <h1 className='fs-3 py-4'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
<h1> Hero in Pricing</h1>