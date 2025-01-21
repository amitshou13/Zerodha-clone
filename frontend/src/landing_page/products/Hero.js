import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='text-center mt-5 p-5 border-bottom'>
                <h1>Zerodha Products</h1>
                <p className='text-muted fs-4 mt-3'>Sleek, modern, and intuitive trading platforms</p>
                <p className='pb-5 mb-4'>Check out our <a href='' style={{ textDecoration: "none" }}>investment offerings{" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;