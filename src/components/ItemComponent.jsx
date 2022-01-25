import React, { useState, useContext } from "react";
import add from "../assets/add.svg"
import trash from "../assets/trash.svg"
import remove from "../assets/remove.svg";
import { ShoppingContext } from "../context/ShoppingContextProvider";
import productTypes from "../types/productTypes";
import {UiContext} from "../context/UiContextProvider";
export const ItemComponent = ({ product }) => {

	const {productDispatch, productState} = useContext(ShoppingContext);
	const {isCheckEnabled} = useContext(UiContext);

	const [isShow, setIsShow] = useState(false);
	const [isMarked, setIsMarked] = useState(false);

	const {markedProducts} = productState;

	const { name, count = 0 } = product;

	const handleMarked = (e) => {

		setIsMarked(e.target.checked);
		const isChecked = e.target.checked;

		if( isChecked === true) {
			const productObj = {
				id: product._id,
				name: product.name,
				desc: product.desc,
				category: product.category,
			}
			productDispatch({
				type: productTypes.getMarkedProducts,
				payload: productObj,
			});
		} else {
			if(markedProducts.length > 0) {
				productDispatch({
					type: productTypes.removeMarkedProduct,
					payload: product._id,
				});
			}
		}
	}

	return (
		<div className="item">
			{isCheckEnabled && (<input type="checkbox" onChange={handleMarked}/>)}
			<span className={`${isMarked === true ? 'marked' : ''} item__name`}>{name}</span>
			{isShow ? (
				<div className="item__controllers">
					<span className="item__delete" onClick={() => productDispatch({type: productTypes.remove, payload: product._id})}>
						<img src={trash} alt="delete icon" />
					</span>
					<span className="item__substract" onClick={() => productDispatch({type:productTypes.decrement, payload: product._id }) }>
						<img src={remove} alt="substract icon" />
					</span>
					<button type="button" className="btn btn-transparent" onClick={() => setIsShow(false)}>
						{count} pcs
					</button>
					<span className="item__add" onClick={() => productDispatch({type:productTypes.increment, payload: product._id }) }>
						<img src={add} alt="add icon" />
					</span>
				</div>
			) : (
				<buttton type="button" className="btn btn-transparent" onClick={() => setIsShow(true)}>
					{count} pcs
				</buttton>
			)}
		</div>
	);
};
