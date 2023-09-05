import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../assets/logo.png"
import './navbar.css'

export const Footer = () => {
    return (
        <div className='footer'>
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='google' />
                    </a>
                    <a href='/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                    <a href='/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='linkedin' />
                    </a>
                    <a href='/' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a>
                </div>
            </section>

            <section className='footerInside'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h3 className='text-uppercase fw-bold mb-4'>
                                <a href='/'><img src={logo} alt='logo' /></a>
                                ALEV Technology
                            </h3>
                            <p>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Turkey
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                hasansoyturk15@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: <b>ALEV Technology</b>
            </div>
        </MDBFooter>
        </div>
    );
}
