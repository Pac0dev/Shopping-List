import React from "react";
import ShoppingContextProvider from "./context/ShoppingContextProvider";
import UiContextProvider from "./context/UiContextProvider";
import RouterApp from "./routers/RouterApp";
import "./styles/styles.scss";
const App = () => {
	return(
		<ShoppingContextProvider>
			<UiContextProvider>
				<RouterApp/>
			</UiContextProvider>
		</ShoppingContextProvider>
	);
}

export default App;
