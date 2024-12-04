import people from "../component/people";
import planets from "../component/planets";
import vehicles from "../component/vehicles";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			selectedEntity: [],
			favorites: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// personas generales
               loadPeople: async () => {
				try{
				const response = await fetch("https://www.swapi.tech/api/people");
				if(!response.ok) throw new Error("Fallo al buscar personas");
				const data = await response.json();
				setStore({people: data.results});
				console.log(data.results)
				}catch (error){
					console.error("Error loading people:", error);
				
				}
			   },

           // vehiculos generales
			   loadVehicles: async () => {
				try{
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				if(!response.ok) throw new Error("Fallo al bucar vehiculos")
				const data = await response.json();
				setStore({vehicles: data.results});
				console.log(vehicles)
				} catch(error){
					console.error("Error loading vehicless:", error);
				}
			   },

			    // planetas generales
			   loadPlanets: async () => {
				try{
				const response = await fetch("https://www.swapi.tech/api/planets");
				if(!response.ok) throw new Error("Fallo al bucar planetas");
				const data = await response.json();
				setStore({planets: data.results});
				console.log(planets)
				}catch(error){
					console.error("Error loading planets:", error);
				}
			   },

			   // perona unica detalles
			   loadPersonDetails: async(id) => {
				try{
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
					if(!response.ok) throw new Error("Error al cargar los detalles del personage");
					const data = await response.json();
					setStore({selectedEntity:data});
				} catch(error) {
					console.error("Error cargando dellates del personaje:", error)
				}
			   },
               // vehiculo unico datalles
			   loadVehicleDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    if (!response.ok) throw new Error("Error al cargar los detalles del vehículo");
                    const data = await response.json();
                    setStore({ selectedEntity: data });
                } catch (error) {
                    console.error("Error cargando detalles del vehículo:", error);
                }
            },
              
			// planeta unico detalles
			loadPlanetDetails: async (id) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                    if (!response.ok) throw new Error("Error al cargar los detalles del planeta");
                    const data = await response.json();
                    setStore({ selectedEntity: data });
                } catch (error) {
                    console.error("Error cargando detalles del planeta:", error);
                }
            },

			addFavorite:(favorite) => {
				const store = getStore();
				if (!store.favorites.some((item) => item.name === favorite.name)) {
                    setStore({ favorites: [...store.favorites, favorite] });
                }
            },

			removeFavoriteByName: (name) => {
				const store = getStore();
				const  updatedFavorites = store.favorites.filter((item) =>item.name !== name);
				setStore({favorites:updatedFavorites});
			},
			
			   

			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
