import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import devImage from '../../img/contact.png';
import '../../styles/contactme.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Configura los parámetros para EmailJS
        const serviceID = 'service_ymulnwp';
        const templateID = 'template_firrrar';
        const userID = 'OAiBWamp4N_-lGVvl';

        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (err) => {
                console.log('FAILED...', err);
                setSubmitSuccess(false);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="contact-me container my-5" id='ContactMe'>
                <h2 className="tittle mb-4"><i class="bi bi-caret-right-fill"></i>Contact Me</h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="info-box position-relative">
                            <h3 className='sub-tittle'>Get in Touch</h3>
                            <p className='info-text'>
                                Always available for freelancing or Full time jobs if the right project comes along, Feel free to contact me.
                            </p>
                            <p className='git'>
                                <i className="bi bi-geo-alt-fill"></i> Santiago, Chile
                            </p>
                            <p className='git'>
                                <i className="bi bi-telephone-fill"></i> +569 64040431
                            </p>
                            <p className='git'>
                                <i className="bi bi-envelope-fill"></i> dnazariego@gmail.com
                            </p>
                           
                            <img src={devImage} alt="Developer" className="contact-image position-absolute" />
                        </div>
                    </div>


                    <div className="col-md-6">
                        <h3 className='sub-tittle'>Say something</h3>
                        <form onSubmit={handleSubmit} className="form form-contact position-relative">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    placeholder='Please write your full name *'
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    placeholder='Please write your email *'
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    placeholder='Please write your full message *'
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitSuccess !== null && (
                                <div className={`mt-3 alert ${submitSuccess ? 'alert-success' : 'alert-danger'}`}>
                                    {submitSuccess ? 'Your message has been sent!' : 'There was an error sending your message.'}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            {showBackToTop && (
                <button className="back-to-top" onClick={scrollToTop}>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </button>
            )}
        </>
    );
};

export default ContactMe;
