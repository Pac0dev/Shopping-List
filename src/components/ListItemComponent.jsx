import { useContext } from "react";
import add from "../assets/add.svg";
import { ShoppingContext } from "../context/ShoppingContextProvider";
import { UiContext } from "../context/UiContextProvider";
import productTypes from "../types/productTypes";

const ListItemComponent = ({ product }) => {
	const {productDispatch} = useContext(ShoppingContext);

	const handleAddProduct = () => {

		productDispatch({
			type: productTypes.select,
			payload: product,
		})

	};

	return (
		<li className="item-list__item">
			{product.name}
			<span className="item-list__add-btn" onClick={handleAddProduct}>
				<img src={add} alt="add" />
			</span>
		</li>
	);
};

export default ListItemComponent;
