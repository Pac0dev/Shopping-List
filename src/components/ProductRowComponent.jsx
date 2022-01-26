import { useContext, useState} from 'react';
import add from '../assets/add.svg';
import {ShoppingContext} from '../context/ShoppingContextProvider';
import {UiContext} from '../context/UiContextProvider';
import productTypes from '../types/productTypes';
const ProductRowComponent = ({product={}, activeClass, setActiveClass}) => {

	const {productDispatch} = useContext(ShoppingContext);
	const {setIsProductDisplay, setIsShowMenu} = useContext(UiContext);

	const {name} = product;

	const handleAddProduct = () => {
		productDispatch({
			type: productTypes.select,
			payload: product,
		});

		setActiveClass(product._id);
	};

	const handleDisplayProductDetail = () => {
		setIsShowMenu(false);
		setIsProductDisplay(true);
		productDispatch({
			type: productTypes.selectSingleProduct,
			payload: product,
		});
	}

	return(
		<div className="product" >
			<span className="product__name" onClick={handleDisplayProductDetail}>{name}</span>
			<img className={`${activeClass === product._id ? 'active' : ''} product__add-icon`} src={add} alt="add-icon" onClick={handleAddProduct}/>
		</div>
	)
}

export default ProductRowComponent
