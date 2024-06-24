import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = (props) => {
    const { dispatch, useState } = useContext(AppContext);
    const [currency, setCurrency] = useState('£');

    return (
        <div>
            <div className="input-group mb-3">
                <select className="custom-select" id="" onChange={(event) => setCurrency(event.target.value)} >
                    <option defaultValue>Currency(£ Pound)...</option>
                    <option value="$" > Dollar</option>
                    <option value="£" >Pound</option>
                    <option value="€" >Euro</option>
                    <option value="₹" >Rupee</option>

                </select>

            </div>

        </div>
    );
};

export default Currency.js
