import React, {useContext} from "react";
import logo from "../assets/logo.svg";
import format_list from "../assets/format_list.svg";
import analytics from "../assets/analytics.svg";
import replay from "../assets/replay.svg";
import cart from "../assets/cart.svg";
import { NavLink } from "react-router-dom";
import {UiContext} from "../context/UiContextProvider";
import {ShoppingContext} from "../context/ShoppingContextProvider";
const Navbar = () => {

	const {setIsShowMenu, setIsCheckedEnabled, isCheckEnabled, isProductDisplay} = useContext(UiContext);
	const {productState} = useContext(ShoppingContext);

	const {selectedProducts} = productState;


	const handleShowShoppingList = () => {
		if(isCheckEnabled === true) {
			setIsCheckedEnabled(false);
		}
		setIsShowMenu(prev => !prev);
	}

	const handleClickShowShoppingList = () => {
		if(isProductDisplay === false) setIsShowMenu(prev => !prev);
	};

	return (
		<nav className="navbar">
			<div className="navbar__img img-container">
				<img src={logo} alt="logo" />
			</div>
			<ul className="navbar__list">
				<NavLink
					className={({ isActive }) =>
						isActive ? "navbar__item navbar__list--active" : "navbar__item"
					}
					to="/items"
				>
					<img className="navbar__img" src={format_list} alt="list" />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "navbar__item navbar__list--active" : "navbar__item"
					}
					to="/history"
				>
					<img className="navbar__img" src={replay} alt="list" />
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive ? "navbar__item navbar__list--active" : "navbar__item"
					}
					to="/analytics"
				>
					<img className="navbar__img" src={analytics} alt="list" />
				</NavLink>
			</ul>
			<div className="orange-bg navbar__img img-container" onClick={handleClickShowShoppingList}>
				<img className="center-img" src={cart} alt="cart" />
					<span className="floating-number">{selectedProducts.length}</span>
			</div>
		</nav>
	);
};

export default Navbar;
