import React, { useState } from 'react';
import certificate1 from '../../img/4geekscertificate.png';
import certificate2 from '../../img/coderhousecertificate.png';
import '../../styles/about.css';

// Lista de certificados
const certificates = [
    {
        institution: "4GEEKS ACADEMY",
        title: "Fullstack Developer",
        date: "Ago-2024",
        img: certificate1,
    },
    {
        institution: "CODERHOUSE",
        title: "React FrontEnd Developer",
        date: "Sept-2023",
        img: certificate2,
    }
];


const Education = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 mb-5 about-text-container" id='Education'>
                    <h2 className="tittle mb-3"><i className="bi bi-caret-right-fill"></i>Education</h2>

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {certificates.map((cert, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 shadow-sm border-0">

                                    <div className="card-body text-center">
                                        <h5 className="card-title">{cert.institution}</h5>
                                        <p className="card-text">{cert.title}</p>
                                        <p className="card-text mb-3"><strong>{cert.date}</strong></p>

                                        <img
                                            src={cert.img}
                                            alt={`${cert.institution} Certificate`}
                                            className="certificate-img img-fluid rounded-4 shadow-sm mb-3"
                                            onClick={() => setSelectedCert(cert.img)}
                                        />



                                        <div className="botones d-flex justify-content-center">
                                            <a
                                                className="btn me-2"
                                                onClick={() => setSelectedCert(cert.img)}
                                            >
                                                <i className="bi bi-eye"></i>
                                            </a>

                                            <a href={cert.img} download className="btn">
                                                <i className="bi bi-download"></i>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal para ver la imagen en grande */}
            {selectedCert && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Certificate Preview</h5>
                                <button type="button" className="btn-close" onClick={() => setSelectedCert(null)}></button>
                            </div>
                            <div className="modal-body text-center">
                                <img src={selectedCert} alt="Certificate" className="img-fluid rounded shadow-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;
