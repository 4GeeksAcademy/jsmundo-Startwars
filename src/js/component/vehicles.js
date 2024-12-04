import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "./Card";
import "../../styles/index.css";

const Vehicles = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (store.vehicles.length === 0) {
            actions.loadVehicles();
        }
    }, []);

    return (
        <div>
            <div className="scrolling-wrapper">
                {
                    store.vehicles?.map((vehicle) => (
                        <Card
                            key={vehicle.uid}
                            title={vehicle.name || "N/A"}
                            description={`Click to see details`}
                            imgUrl={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                            linkUrl={`/vehicle/${vehicle.uid}`} // Pasamos la URL a Card
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Vehicles;



