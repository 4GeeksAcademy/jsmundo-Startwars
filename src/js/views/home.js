// src/views/home.js
import React, { useEffect, useContext } from "react";
import People from "../component/people";
import Vehicles from "../component/vehicles";
import Planets from "../component/planets";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPeople();
        actions.loadVehicles();
        actions.loadPlanets();
		
    }, []);

    return (
        <div className="home-container">
        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col">
                    <h2 className="text-center mb-3"></h2>
                    <People  />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <h2 className="text-center mb-3"></h2>
                    <Vehicles />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col">
                    <h2 className="text-center mb-3"></h2>
                    <Planets />
                </div>
            </div>
        </div>
        </div>
    );
};

