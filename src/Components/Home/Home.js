import React, { useState } from 'react';
import FakeData from "../../FakeData/"
import Vehicles from '../Vehicles/Vehicles';
import './home.css';

const Home = () => {
    const [vehicles, setVehicles] = useState(FakeData);
    return (
        <div className="main-home">
            {
                vehicles.map(vehicle => <Vehicles vehicle={vehicle}>{vehicle.name}</Vehicles>)
            }
        </div>
    );
};

export default Home;