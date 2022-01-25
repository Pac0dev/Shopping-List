import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageHistory from "../pages/PageHistory";
import PageItems from "../pages/PageItems";
import PageNotFound from "../pages/PageNotFound";
import PageStatics from "../pages/PageStatics";

const RouterApp = () => {
	console.log();
	return (
		<BrowserRouter>
			<div className="flex">
				<Navbar />
				<Routes>
					<Route path="/items" element={<PageItems />} />
					<Route path="/history" element={<PageHistory />} />
					<Route path="/analytics" element={<PageStatics />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default RouterApp;
