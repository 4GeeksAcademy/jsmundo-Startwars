import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, imgUrl, linkUrl }) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState(false);

   
    useEffect(() => {
        setIsLiked(store.favorites.some((item) => item.name === title));
    }, [store.favorites, title]); 

    const handleLike = (e) => {
        e.stopPropagation(); 
        if (isLiked) {
            actions.removeFavoriteByName(title);
        } else {
            actions.addFavorite({ name: title, link: linkUrl });
        }
       
    };

    const handleNavigation = () => {
        navigate(linkUrl);
    };

    return (
        <div className="card" onClick={handleNavigation}>
            <img src={imgUrl} alt={title} />
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <button
                        className={`btn btn-link p-0 like-button ${
                            isLiked ? "liked" : ""
                        }`}
                        onClick={handleLike}
                    >
                        {isLiked ? "❤️" : "🤍"}
                    </button>
                </div>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary" onClick={handleNavigation}>
                    Learn more!
                </button>
            </div>
        </div>
    );
};

export default Card;




