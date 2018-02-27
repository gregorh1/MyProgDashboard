import React from 'react';

const TechItem = (props) => {
    return (
        <div onClick={props.click} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card text-center mb-2" style={{height: '7rem'}}>
                <div className="card-body" style={{cursor: 'pointer'}}>
                    <h5 className="card-title text-success">{props.tech.name}</h5>
                    <p className="card-text text-truncate">{props.tech.notes}</p>
                </div>
            </div>
        </div>
    );
};

export default TechItem;
