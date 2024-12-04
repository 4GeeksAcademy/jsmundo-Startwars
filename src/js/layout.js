import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";

import PersonDetails from "./views/PersonDetails";
import VehicleDetails from "./views/VehicleDetails";
import PlanetDetails from "./views/PlanetDetails";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";

	// Estado para manejar el video introductorio
	const [showIntro, setShowIntro] = useState(true);

	// Maneja el fin del video o cuando el usuario hace clic en "Skip Intro"
	const handleVideoEnd = () => {
		setShowIntro(false);
	};

	return (
		<div>
			{showIntro ? (
				// Pantalla del video introductorio
				<div className="video-container">
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/8NoOsPwYacA?autoplay=1&controls=0&loop=1&playlist=8NoOsPwYacA"
						title="Star Wars Intro"
						allow="autoplay; fullscreen"
						allowFullScreen
						className="intro-video"
					></iframe>
					<div className="skip-button">
						<button onClick={handleVideoEnd} className="btn btn-secondary">
							Skip Intro
						</button>
					</div>
				</div>
			) : (
				// Navegación principal
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/demo" element={<Demo />} />
							<Route path="/person/:id" element={<PersonDetails />} />
							<Route path="/vehicle/:id" element={<VehicleDetails />} />
							<Route path="/planet/:id" element={<PlanetDetails />} />
							<Route path="*" element={<h1>Not found!</h1>} />
						</Routes>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			)}
		</div>
	);
};

export default injectContext(Layout);


