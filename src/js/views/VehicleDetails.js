import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/Details.css"


const VehicleDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [vehicle, setVehicle] = useState(null);

    useEffect(() => {
        actions.loadVehicleDetails(params.id);
        console.log(store.selectedEntity);
    }, [params.id]);

    useEffect(() => {
        if (store.selectedEntity) {
            setVehicle(store.selectedEntity)
        }
    }, [store.selectedEntity])



    if (!vehicle) {
        return <div>Loading...</div>;
    } else {
        console.log(vehicle)
        return (
            <div className="detail-container">
            <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
                className="detail-image"
                alt={vehicle?.result?.properties.name}
            />
            <div className="detail-info">
                <h1>Details for: {vehicle?.result?.properties.name}</h1>
                <p>Model: {vehicle?.result?.properties.model}</p>
                <p>Manufacturer: {vehicle?.result?.properties.manufacturer}</p>
                <p>Cost in Credits: {vehicle?.result?.properties.cost_in_credits}</p>
                <p>Length: {vehicle?.result?.properties.length}</p>
                <p>Max Atmosphering Speed: {vehicle?.result?.properties.max_atmosphering_speed}</p>
                <p>Crew: {vehicle?.result?.properties.crew}</p>
                <p>Passengers: {vehicle?.result?.properties.passengers}</p>
                <p>Cargo Capacity: {vehicle?.result?.properties.cargo_capacity}</p>
                <Link to="/" className="detail-back-btn">
                    Back Home
                </Link>
            </div>
            <div className="description-container">
                <h1 className="description-title">{vehicle?.result?.properties.name}</h1>
                <p className="description-text">
                    {`The ${vehicle?.result?.properties.name} is a remarkable vehicle used across the galaxy. Known for its ${vehicle?.result?.properties.model} design, it has been a staple of ${vehicle?.result?.properties.manufacturer}, capable of holding ${vehicle?.result?.properties.cargo_capacity} units of cargo and ${vehicle?.result?.properties.passengers} passengers. Its versatility and reliability make it one of the most iconic vehicles in the Star Wars universe.`}
                </p>
            </div>
        </div>
        );
    }

};

export default VehicleDetails;
