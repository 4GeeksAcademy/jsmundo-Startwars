import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        actions.loadPersonDetails(params.id);
        console.log(store.selectedEntity);
    }, [params.id]);

    useEffect(() => {
        if (store.selectedEntity) {
            setPerson(store.selectedEntity)
        }
    }, [store.selectedEntity]);

    if (!person) {
        return <div>Loading...</div>;
    } else {
        console.log(person)
        return (
            <div className="detail-container">
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                className="detail-image"
                alt={person?.result?.properties.name}
            />
            <div className="detail-info">
                <h1>Details for: {person?.result?.properties.name}</h1>
                <p>Height: {person?.result?.properties.height}</p>
                <p>Hair Color: {person?.result?.properties.hair_color}</p>
                <p>Mass: {person?.result?.properties.mass}</p>
                <p>Gender: {person?.result?.properties.gender}</p>
                <p>Birth Year: {person?.result?.properties.birth_year}</p>
                <p>Skin Color: {person?.result?.properties.skin_color}</p>
                <Link to="/" className="detail-back-btn">
                    Back Home
                </Link>
            </div>
            <div className="description-container">
                <h1 className="description-title">{person?.result?.properties.name}</h1>
                <p className="description-text">
            {`The character ${person?.result?.properties.name} is a key figure in the Star Wars universe. Standing at ${person?.result?.properties.height} cm tall, with ${person?.result?.properties.hair_color} hair and ${person?.result?.properties.skin_color} skin, they are known for their remarkable presence. Born in ${person?.result?.properties.birth_year}, this ${person?.result?.properties.gender} individual has played a significant role in shaping the events of the galaxy. Their story is one of courage, resilience, and influence in the face of adversity.`}
        </p>
            </div>
        </div>
        );
    }

};

export default PersonDetails;
