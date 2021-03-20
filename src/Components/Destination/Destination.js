import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../FakeData';
import Map from './Map';
import './Destination.css';

const Destination = () => {
    const [search, setSearch] = useState(true);
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [print, setPrint] = useState(false);
    function getFrom(val) {
        setFrom(val.target.value);
        setPrint(false);
    }
    function getTo(val) {
        setTo(val.target.value);
        setPrint(false);
    }

    const { vehicleId } = useParams();
    
    return (
        <div className="main-container">
            <div className="main-from-component">
                <div className="form-to-component">
                    {
                        search ?
                            <div>
                                <p>Pick From</p>
                                <input type="text" onChange={getFrom} name="" id="" />
                                <br />
                                <p>Pick To</p>
                                <input type="text" onChange={getTo} name="" id="" />
                                <br />
                                <br />
                                <button onClick={() => {
                                    setSearch(false);
                                    setPrint(true);
                                }}>
                                    Search</button>
                            </div> :
                            <div className="pricing-vehicle">
                                {
                                    print ? <div>
                                        <h1>{from}</h1>
                                        <h1>{to}</h1>
                                    </div> : null
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="map-component">
                {/* <Map></Map> */}
                <img src="data:image/jpeg;base64,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" alt="" />
            </div>
        </div>
    );
};

export default Destination;