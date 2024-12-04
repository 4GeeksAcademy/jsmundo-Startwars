import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        actions.loadPlanetDetails(params.id);
        console.log(store.selectedEntity);
    }, [params.id]);

    useEffect(() => {
        if (store.selectedEntity) {
            setPlanet(store.selectedEntity)
        }
    }, [store.selectedEntity])

    if (!planet) {
        return <div>Loading...</div>;
    } else {
        console.log(planet)

        return (
            <div className="detail-container">
            <img
                src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
                className="detail-image"
                alt={planet?.result?.properties.name}
            />
            <div className="detail-info">
                <h1>Details for: {planet?.result?.properties.name}</h1>
                <p>Climate: {planet?.result?.properties.climate}</p>
                <p>Diameter: {planet?.result?.properties.diameter}</p>
                <p>Population: {planet?.result?.properties.population}</p>
                <p>Rotation Period: {planet?.result?.properties.rotation_period}</p>
                <p>Orbital Period: {planet?.result?.properties.orbital_period}</p>
                <p>Terrain: {planet?.result?.properties.terrain}</p>
                <p>Surface Water: {planet?.result?.properties.surface_water}</p>
                <Link to="/" className="detail-back-btn">
                    Back Home
                </Link>
            </div>
            <div className="description-container">
                <h1 className="description-title">{planet?.result?.properties.name}</h1>
                <p className="description-text">
                    {`${planet?.result?.properties.name} is a fascinating world in the Star Wars universe. Known for its ${planet?.result?.properties.climate} climate and ${planet?.result?.properties.terrain} terrain, it is home to a population of ${planet?.result?.properties.population} inhabitants. Its rotation period is ${planet?.result?.properties.rotation_period} hours, while it takes ${planet?.result?.properties.orbital_period} days to orbit its star.`}
                </p>
            </div>
        </div>
        
        );


    }

};

export default PlanetDetails;
