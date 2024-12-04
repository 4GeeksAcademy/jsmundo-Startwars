import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars Logo"
                        style={{ height: "40px" }}
                    />
                </Link>
                <div className="dropdown ml-auto">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="favoritesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites ({store.favorites.length})
                    </button>
                    <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="favoritesDropdown"
                    >
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-muted">No favorites added</li>
                        ) : (
                            store.favorites.map((favorite, index) => (
                                <li
                                    className="dropdown-item d-flex justify-content-between align-items-center"
                                    key={index}
                                >
                                    <span className="text-dark">{favorite.name}</span>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => actions.removeFavoriteByName(favorite.name)}
                                    >
                                        🗑️
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};






