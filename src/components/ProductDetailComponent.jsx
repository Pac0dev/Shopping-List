import {useContext} from "react"
import {ShoppingContext} from "../context/ShoppingContextProvider"
import {UiContext} from "../context/UiContextProvider";
import productTypes from "../types/productTypes";
import back from '../assets/back.svg';
const ProductDetailComponent = () => {
	const {productState, productDispatch} = useContext(ShoppingContext);
	const {setIsProductDisplay} = useContext(UiContext);
	
	const {product} = productState;

	const handleAddProduct = () => {
		productDispatch({
			type: productTypes.select,
			payload: product,
		});
		setIsProductDisplay(false);
	};

	const handleBack = () => {
		setIsProductDisplay(false);
		productDispatch({
			type: productTypes.removeSingleProduct
		});
	};

	return (
		<aside className="aside-product">
			<header className="aside-product__header">
				<div className="aside-product__back" onClick={handleBack}>
					<img src={back} alt="arrow back icon"/>
					<span>back</span>
				</div>
				<div className="img-container">
				</div>
			</header>
			<div className="aside-product__info">
				<div className="aside-product__detail">
					<span className="aside-product__title text-muted">name</span>
					<span className="aside-product__name">{product.name}</span>
				</div>
				<div className="aside-product__detail">
					<span className="aside-product__title text-muted">category</span>
					<span className="aside-product__name">{product.category.name}</span>
				</div>
				<div className="aside-product__detail">
					<span className="aside-product__title text-muted">desc</span>
					<span className="aside-product__name">{product.desc}</span>
				</div>
			</div>
			<div className="aside-product__buttons">
				<button className="btn">Delete</button>
				<button className="btn btn-orange" onClick={handleAddProduct}>Add to list</button>
			</div>
		</aside>
	)
}

export default ProductDetailComponent
