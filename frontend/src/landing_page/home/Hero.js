import React from 'react'

function Hero({title, price}) {
    return (
        <div className='container p-5 mb-5 mt-4'>
            <div className='row text-center justify-content-center'>
                <img src='media/images/homeHero.png' alt='HomeHeroImage' className='mb-5' style={{width:"66%"}}></img>
                <h1 className='my-3 '>Invest in everything</h1>
                <p className='fs-5 mb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"17.5%", margin: "0 auto"}} >Sign up for free</button>
            </div>
        </div> 
    );
}

export default Hero;