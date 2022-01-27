import React, { useContext, useEffect, useState } from "react";
import wine from "../assets/wine.svg";
import shopping from "../assets/shopping.svg";
import { ShoppingContext } from "../context/ShoppingContextProvider";
import { ItemComponent } from "./ItemComponent";
import SaveItemComponent from "./SaveItemComponent";
import AddItemComponent from "./AddItemComponent";
import {getSortedCategories} from "../helpers/filterProducts";
const AsideComponent = ({media}) => {
	const { productState } = useContext(ShoppingContext);

	const { selectedProducts } = productState;

	const [categoriesList, setCategoriesList] = useState([]);

	const [isAddingItem, setIsAddingItem] = useState(false);


	useEffect(() => {
		setCategoriesList(getSortedCategories(selectedProducts));
	}, [selectedProducts]);

	return (
		<aside className={`aside ${media}`}>
			<header className="aside__header">
				<img src={wine} alt="wine" />
				<div className="aside__text">
					<span>Didn't find what you need?</span>
					<button className="btn" onClick={() => setIsAddingItem(true)}>Add Item</button>
				</div>
			</header>
			<div className="aside__section">
				<h2>Shopping List</h2>
				{
					selectedProducts.length > 0 ? 
						(
							<ul className="aside__list">
								{categoriesList.map((cat) => {
									const products = productState.selectedProducts
										.filter(
											(product) =>
												product.category.name.toLowerCase() === cat
										)
										.map((product) => (
											<ItemComponent key={product._id} product={product}/>
										));
									return (
										<li key={cat}>
											<span className="text-muted category">{cat}</span> {products}
										</li>
									);
								})}
							</ul>

						)
						: 
						(

							<>
								<h3 className="aside__positioned-text text-muted">No Items</h3>
								<img className="aside__img" src={shopping} alt="shopping icon"/>
							</>
						)
				}
			</div>
			<SaveItemComponent isSaveButtonEnabled={selectedProducts.length > 0}/>
			{
				isAddingItem === true && (<AddItemComponent setIsAddingItem={setIsAddingItem}/>)
			}
		</aside>
	);
};

export default AsideComponent;
