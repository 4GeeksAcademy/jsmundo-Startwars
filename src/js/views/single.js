// import React, { useState, useEffect, useContext } from "react";

// import { Link, useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// export const Single = () => {
// 	const { store, actions } = useContext(Context);
// 	const params = useParams();
// 	const [entity, setEntity] = useState(null);

       
//        useEffect(() => {
// 		const allEntities = [...store.people, ...store.vehicles, ...store.planets];
//        // const foundEntity = allEntities[parseInt(theid)];
// 		actions.loadonePeople(params.id)
// 		console.log(store.people)

// 		//setEntity(foundEntity);
// 	   }, []);

	  


// 	return (
// 		<div className="jumbotron">
// 			 {/* <h1>Deteils for:{store.people.name}</h1>
// 			<div>
// 				{Object.keys(store.people).map((key) => (
// 					<p key={key}>
// 						<strong>{key}:</strong> {store.people}
// 					</p>
// 				))}

// 			</div>
// 			<Link to="/">
// 				<span className="btn btn-primary btn-lg" href="#" role="button">
// 					Back home
// 				</span>
// 			</Link> */}
// 		</div> 
// 	);
// };


