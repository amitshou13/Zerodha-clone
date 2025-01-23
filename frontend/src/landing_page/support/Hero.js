import React from 'react'

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='px-5 pb-5'>
                <div className='px-4 pt-5' id='supportwrapper'>
                    <h4>Support Portal</h4>
                    <a href='' style={{textUnderlineOffset:"8px"}}>Track tickets</a>
                </div>

                <div className='row p-5' style={{lineHeight:"2.5"}}>
                    <div className='col-7 px-4'>
                        <h3 className='fs-4 mb-4' style={{lineHeight:"1.4"}}>Search for an answer or browse help topics to create a ticket</h3>
                        <input type='text' placeholder='Eg: how do I activate F&O, why is my order getting rejected...' style={{width:"100%", padding:"5px 20px"}}/> <br/>
                        <a href='' style={{textUnderlineOffset:"8px", padding:"10px 30px 10px 0"}}>Track account opening</a>
                        <a href='' style={{textUnderlineOffset:"8px", padding:"10px 30px 10px 0"}}>Track segment activation</a>
                        <a href='' style={{textUnderlineOffset:"8px", padding:"10px 30px 10px 0"}}>Intraday margins</a><br/>
                        <a href='' style={{textUnderlineOffset:"8px", padding:"10px 30px 10px 0"}}>Kite user manual</a>
                    </div>
                    <div className='col-5 px-4'>
                        <h3 className='fs-4'>Featured</h3>
                        <ol>
                            <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                            <li><a href=''>Surveillance measure on scrips - January 2025</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;