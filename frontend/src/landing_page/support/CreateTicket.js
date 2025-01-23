import React from 'react'

function CreateTicket() {
    return (
        <div className='container px-3'>
            <div className='row mt-5 px-5 '>
                <p className='text-muted fs-4 px-5'>To create a ticket, select a relevant topic</p>
                <div className='col-4 px-5 mt-4'>
                    <div className='row'><p className='fs-5'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</p></div>
                    <div className='row mx-2'>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Getting started</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Online</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Offline</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Charges</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Company, Partnership and HUF</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Non Resident Indian (NRI)</a><br/>
                    </div>
                </div>
                <div className='col-4 px-4 mt-4'>
                    <div className='row'><p className='fs-5'><i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account</p></div>
                    <div className='row mx-2'>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Login credentials</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Your Profile</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Account modification and segment addition</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>CMR & DP ID</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Nomination</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Transfer and conversion of shares</a><br/>
                    </div>
                </div>
                <div className='col-4 px-5 mt-4'>
                    <div className='row'><p className='fs-5'><i class="fa fa-bar-chart" aria-hidden="true"></i> Trading and Markets</p></div>
                    <div className='row mx-2'>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Trading FAQs</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Margins</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Product and order types</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Corporate actions</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Kite features</a><br/>
                    </div>
                </div>

                <div className='col-4 px-5 mt-4'>
                    <div className='row'><p className='fs-5 mt-3'><i class="fa fa-credit-card" aria-hidden="true"></i> Funds</p></div>
                    <div className='row mx-2'>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Fund withdrawal</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Adding funds</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Adding bank accounts</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>eMandates</a><br/>
                    </div>
                </div>
                <div className='col-4 px-4 mt-4'>
                    <div className='row'><p className='fs-5 mt-3'><i class="fa fa-codiepie" aria-hidden="true"></i> Console</p></div>
                    <div className='row mx-2'>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>IPO</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Portfolio</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Funds statement</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Profile</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Reports</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Referral program</a><br/>
                    </div>
                </div>
                <div className='col-4 px-5 mt-4'>
                    <div className='row'><p className='fs-5 mt-3'><i class="fa fa-circle-o" aria-hidden="true"></i> Coin</p></div>
                    <div className='row mx-2'>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Understanding mutual funds and Coin</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Coin app</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Coin web</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>Transactions and reports</a><br/>
                        <a href='' style={{textDecoration:"none", lineHeight:"2.5"}}>National Pension Scheme (NPS)</a><br/>
                    </div>
                </div>
            </div>

            <div className='row p-5 text-center' style={{lineHeight:1.8}}>
                
            </div>
        </div>
    );
}

export default CreateTicket;