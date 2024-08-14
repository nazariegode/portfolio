import React from "react";
import fondo from '../../img/header.png'

const Jumbotron = () => {
    return (
        <div className="container p-2" id="jumbo">
            <div className="row">
                <div className="col-md-12 p-5 text-center text-white bg-dark rounded-3" style={{ backgroundImage: `url(${fondo})`, backgroundSize: '100%', backgroundPosition: '25% 30%' }}>
                    <h1 className="text-body-emphasis p-3">¡WAU-WAU!</h1>
                    <h4 className="text-body-emphasis p-3">¿Are you looking for a new furry friend to fill your home with love and joy?</h4>
                    <p className="col-lg-8 mx-auto fs-5">
                        We have the perfect opportunity for you. At our organization, we are dedicated to rescuing and caring for the most adorable puppies that have been abandoned and need a loving home.
                    </p>
                    <div className="d-inline-flex gap-2 mb-5 p-5">
                        <button className="d-inline-flex align-items-center btn btn-secondary btn-lg px-4" type="button">
                            Meet our pets
                        </button>
                        <button className="btn btn-outline-secondary btn-lg px-4" type="button">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron 
