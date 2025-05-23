import React from 'react';
import devImage2 from '../../img/dn6.png';
import '../../styles/about.css';


const Experience = () => {
    return (
        <div className='container'>
            <div className='row'>

                {/* EXPERIENCE */}
                <div className="about col-12 d-flex align-items-center justify-content-center mb-5" id='Experience'>
                    <div className="about-text-container">
                        <h2 className="tittle"><i className="bi bi-caret-right-fill"></i>Experience</h2>

                        <div className="card-experience mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Pacific Forest Chile</h5>
                                    <div className="card-text">
                                        <p className="exp-title">Role:</p>
                                        <p className="exp-text">Web Developer</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Period:</p>
                                        <p className="exp-text">Jan-2025 / Actual</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Located:</p>
                                        <p className="exp-text">Santiago, Chile</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Mode:</p>
                                        <p className="exp-text">Remote</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-experience mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">NO-Country</h5>
                                    <div className="card-text">
                                        <p className="exp-title">Role:</p>
                                        <p className="exp-text">Front-End Developer</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Period:</p>
                                        <p className="exp-text">Ago-2024 / Feb-2025</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Located:</p>
                                        <p className="exp-text">Santiago, Chile</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Mode:</p>
                                        <p className="exp-text">Remote</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-experience mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">AMSOFT SPA</h5>
                                    <div className="card-text">
                                        <p className="exp-title">Role:</p>
                                        <p className="exp-text">Human Resource Lead</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Period:</p>
                                        <p className="exp-text">Nov-2022 / May-2024</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Located:</p>
                                        <p className="exp-text">Santiago, Chile</p>
                                    </div>

                                    <div className="card-text">
                                        <p className="exp-title">Mode:</p>
                                        <p className="exp-text">Hybrid</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Madeco by NEXAN's</h5>
                                    <p className="card-text"><strong>Role:</strong> Human Resource Lead</p>
                                    <p className="card-text"><strong>Period:</strong> Mar-2019 / Nov-2021</p>
                                    <p className="card-text"><strong>Located:</strong> Santiago, Chile</p>
                                    <p className="card-text"><strong>Mode: </strong> OnSite</p>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Easy Retail SA</h5>
                                    <p className="card-text"><strong>Role:</strong> Human Resource Lead</p>
                                    <p className="card-text"><strong>Period:</strong> May-2018 / Mar-2019</p>
                                    <p className="card-text"><strong>Located:</strong> Santiago, Chile</p>
                                    <p className="card-text"><strong>Mode: </strong> OnSite</p>
                                </div>
                            </div>
                        </div> */}

                        {/*  <div className="card mb-3">
                            <div className="row g-0">
                                <div className="card-body">
                                    <h5 className="card-title">Mc Donald's</h5>
                                    <p className="card-text"><strong>Role:</strong> Team Leader</p>
                                    <p className="card-text"><strong>Period:</strong> Jan-2017 / Apr-2018</p>
                                    <p className="card-text"><strong>Located:</strong> Santiago, Chile</p>
                                    <p className="card-text"><strong>Mode: </strong> OnSite</p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className="about-image-container">
                        <img src={devImage2} alt="Developer" className="about-image" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Experience;
