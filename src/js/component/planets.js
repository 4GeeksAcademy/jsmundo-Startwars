import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "./Card";
import "../../styles/index.css";

const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (store.planets.length === 0) {
            actions.loadPlanets();
        }
    }, []);

    return (
        <div>
            <div className="scrolling-wrapper">
                {
                    store.planets?.map((planet) => (
                        <Card
                            key={planet.uid}
                            title={planet.name || "N/A"}
                            description={`Click to see details`}
                            imgUrl={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                            linkUrl={`/planet/${planet.uid}`} // Pasamos la URL a Card
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Planets;


