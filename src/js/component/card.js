import React from "react";

const Card = ({ url, titulo, textbut, description }) => {
    return (
        <div className="card bg-dark">
            <img src={url} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-white"><b>{titulo}</b></h5>
                <p className="card-text text-white" style={{ fontSize: "16px" }}>{description}</p>
                <div className="mt-auto">
                    <a href="#" className="btn btn-secondary">{textbut}</a>
                </div>
            </div>
        </div>
    )
}

export default Card;
