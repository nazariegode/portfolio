import React, { useState } from 'react';
import '../../styles/about.css';

// Lista de certificados
const certificates = [
    {
        institution: "4GEEKS ACADEMY",
        title: "Fullstack Developer",
        date: "Ago-2024",
        file: "/4geekscertificate.png"  // Ruta dentro de "public"
    },
    {
        institution: "CODERHOUSE",
        title: "React FrontEnd Developer",
        date: "Sept-2023",
        file: "/coderhousecertificate.png"  // Ruta dentro de "public"
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
                                            src={cert.file}
                                            alt={`${cert.institution} Certificate`}
                                            className="certificate-img img-fluid rounded shadow-sm mb-3"
                                            onClick={() => setSelectedCert(cert.file)}
                                        />



                                        <div className="botones d-flex justify-content-center">
                                            <a
                                                className="btn me-2"
                                                onClick={() => setSelectedCert(cert.file)}
                                            >
                                                <i className="bi bi-eye"></i> See Certificate
                                            </a>

                                            <a href={cert.file} download className="btn">
                                                <i className="bi bi-download"></i> Download
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
