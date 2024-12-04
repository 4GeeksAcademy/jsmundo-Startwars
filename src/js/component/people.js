import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "./Card";
import "../../styles/index.css";

const People = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (store.people.length === 0) {
            actions.loadPeople(); 
        }
    }, []);

    return (
        <div>
            <div className="scrolling-wrapper">
                {
                    store.people?.map((person) => (
                        <Card
                            key={person.uid}
                            title={person.name || "N/A"}
                            description={`Click to see details`}
                            imgUrl={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                            linkUrl={`/person/${person.uid}`} // Pasamos la URL a Card
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default People;



