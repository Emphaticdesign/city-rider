import React from 'react';
import { Link } from 'react-router-dom';
import './vehicle.css';

const Vehicles = (props) => {
    const { img, name, id } = props.vehicle;
    return (

        <div className="vehicle-main">
            <Link to={"/vehicle/"+id}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
            </Link>
        </div>

    );
};

export default Vehicles;