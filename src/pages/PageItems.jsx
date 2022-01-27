import React, { useState, useContext, useEffect } from "react";
import AsideComponent from "../components/AsideComponent";
import ProductDetailComponent from "../components/ProductDetailComponent";
import TableProductsComponent from "../components/TableProductsComponent";
import {ShoppingContext} from "../context/ShoppingContextProvider";
import { UiContext } from "../context/UiContextProvider";
import { getFetch } from "../helpers/fetchUtility";
import { getFilteredProducts } from "../helpers/filterProducts";
import productTypes from "../types/productTypes";

const PageItems = ({windowWidth}) => {
	const { isShowMenu, isProductDisplay } = useContext(UiContext);
	const {productDispatch, productState} = useContext(ShoppingContext);

	const {products = []} = productState;

	const [searchText, setSearchText] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([])

	useEffect(() => {
		getFetch("/products/get-products")
			.then( (data)  => {
				productDispatch({
					type: productTypes.getProducts,
					payload: data.products,
				})
			})
			.catch((err) => console.warn(err));
	}, []);

	const handleSearchProduct = (e) => {
		setSearchText(e.target.value);
		let filteredProducts = [];
		filteredProducts = getFilteredProducts(products, e.target.value);
		if(filteredProducts.length > 0)
			setFilteredProducts(filteredProducts);
	};

	return (
		<div className={`${isShowMenu === false ? "scroll" : ""} flex-right`}>
			<div className="container">
				<div className="items-container">
					<div className="header">
						<h1 className="header__title">
							<b className="orange">Shoppingify</b> allows you take
							your shopping list wherever you go
						</h1>
						<div>
							<input
								className="rd-input header__input"
								type="text"
								placeholder="search item"
								value={searchText}
								onChange={handleSearchProduct}
							/>
						</div>
					</div>
					<div className="main">
						<TableProductsComponent products={filteredProducts.length > 0 ? filteredProducts : products}/>
					</div>
				</div>
				{(isShowMenu &&  windowWidth < 768) && <AsideComponent/>}
				{(isProductDisplay === true && windowWidth < 768) && <ProductDetailComponent/>}
			</div>
		</div>
	);
};

export default PageItems;
