import React from 'react'

function Universe() {
    return (
        <div className='container p-5'>
            <div className='row text-center fs-5 mb-2 p-4'>
                <p>Want to know more about our technology stack? Check out the <a href='' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
            </div>

            <div className='row text-center p-5'>
                <h1 className='fs-2 mb-4'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            
                <div className='col-4 p-5 mt-3'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"70%"}}/>
                    <p className='text-small text-muted mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 py-5 mt-3'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"70%", padding:"7px"}}/>
                    <p className='text-small text-muted mt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-5 mt-3'>
                    <img src='media/images/tijori.svg' style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                <div className='col-4 px-5 mt-3'>
                    <img src='media/images/streaklogo.png' style={{width:"70%"}}/>
                    <p className='text-small text-muted mt-3'>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className='col-4 px-5 mt-3'>
                    <img src='media/images/smallcaselogo.png' style={{width:"70%", padding:"7px"}}/>
                    <p className='text-small text-muted mt-3'>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 px-5 mt-3'>
                    <img src='media/images/dittoLogo.png' style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-4'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>

                <div className='row text-center mt-5'>
                    <button className='p-2 btn btn-primary fs-5' style={{width:"17.5%", margin: "0 auto"}} >Sign up for free</button>
                </div>
            </div>


{/*             
            <div className='row text-center p-5'>
                <div className='col-4 p-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"70%"}}/>
                    <p className='text-small text-muted mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"70%"}}/>
                    <p className='text-small text-muted mt-4 pt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/tijori.svg' style={{width:"50%"}}/>
                    <p className='text-small text-muted mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            </div> */}
        </div>
    );
}

export default Universe;