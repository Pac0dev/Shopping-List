import {useContext, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AsideComponent from "../components/AsideComponent";
import Navbar from "../components/Navbar";
import ProductDetailComponent from "../components/ProductDetailComponent";
import {UiContext} from "../context/UiContextProvider";
import PageHistory from "../pages/PageHistory";
import PageItems from "../pages/PageItems";
import PageNotFound from "../pages/PageNotFound";
import PageStatics from "../pages/PageStatics";

const RouterApp = () => {
	const {isShowMenu, isProductDisplay} = useContext(UiContext);
	const [windowWidth, setWindowWidth] = useState((window.innerWidth > 768) ? 769 : 767);

	window.addEventListener('resize', (e) => {
		if(window.innerWidth < 768) {
			(windowWidth !== 767) && setWindowWidth(767);
		} else if(window.innerWidth > 768) {
			(windowWidth !== 769) && setWindowWidth(769);
		}
	});

	/*TODO: view bugs*/

	return (
		<BrowserRouter>
			<div className="flex">
				<Navbar />
				<Routes>
					<Route path="/items" element={<PageItems windowWidth={windowWidth}/>} />
					<Route path="/history" element={<PageHistory windowWidth={windowWidth}/>} />
					<Route path="/analytics" element={<PageStatics />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				{isShowMenu === true && windowWidth > 768 && (
					<AsideComponent media="desktop"/>
				)}
				{(isProductDisplay === true && windowWidth > 768) && (
					<ProductDetailComponent media="desktop"/>
				)}
			</div>
		</BrowserRouter>
	);
};

export default RouterApp;
