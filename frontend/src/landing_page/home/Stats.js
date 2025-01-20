import React from 'react'

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-5 p-5'>
                    <h1 className='fs-2 mb-5'>Trush with confidence</h1>

                    <h2 className='fs-4 mt-3'>Customer-first always</h2>
                    <p className='text-muted mt-2'>That's why 1.5+ crore customers trust Zerodha with <br/> ₹4.5+ lakh crores of equity investments and contribute to <br/> 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted mt-2'>No gimmicks, spam, "gamification", or annoying push <br/> notifications. High quality apps that you use at your <br/> pace, the way you like.</p>

                    <h2 className='fs-4 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted mt-2'>Not just an app, but a whole ecosystem. Our investments <br/> in 30+ fintech startups offer you tailored services <br/> specific to your needs.</p>

                    <h2 className='fs-4 mt-4'>Do better with money</h2>
                    <p className='text-muted mt-2'>With initiatives like Nudge and Kill Switch, we don't just <br/> facilitate transactions, but actively help you do better <br/> with your money.</p>
                    
                </div>
                <div className='col-7 p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"95%"}} />
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href=''  style={{textDecoration:"none"}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;