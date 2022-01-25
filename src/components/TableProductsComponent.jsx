import { useEffect, useState } from "react";
import { getSortedCategories } from "../helpers/filterProducts";
import ProductCategoryRowComponent from "./ProductCategoryRowComponent";
import ProductRowComponent from "./ProductRowComponent";

const TableProductsComponent = ({ products = [] }) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		setCategories(getSortedCategories(products));
	}, [products]);

	return (
		<div className="product-table">
			{categories.map((cat, i) => {
				const groupedProducts = products
					.filter((product) => product.category.name.toLowerCase() === cat)
					.map((product) => (
						<ProductRowComponent
							key={product._id}
							product={product}
						/>
					));
				return (
					<div className="product_table" key={i}>
						<ProductCategoryRowComponent name={cat} />
						<div className="products">{groupedProducts}</div>
					</div>
				);
			})}
		</div>
	);
};

export default TableProductsComponent;
