import React, { useEffect, useState } from "react";
import { getFetch } from "../helpers/fetchUtility";
import ListItemComponent from "./ListItemComponent";

const ListComponent = ({name}) => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		getFetch('/products/get-products').then((data) => {
			const {products} = data;
			setProducts(products);
		})
		.catch(err => console.warn(err));
	}, []);



	return (
		<>
			<h3 className="item-category">{name}</h3>
			<ul className="item-list">
				{
					products.filter((product) => {
						return product.category.name === name;
					}).map(product => {
						return <ListItemComponent key={product._id} product={product}/>
					})
				}
			</ul>
		</>
	);
};
export default ListComponent;
