import moment from "moment";
import {useContext, useEffect, useState} from "react"
import {ShoppingContext} from "../context/ShoppingContextProvider"
import {getSortedCategories} from "../helpers/filterProducts";
import HistoryListComponent from "./HistoryListComponent";

import back from '../assets/back.svg';
import dateIcon from '../assets/dateIcon.svg';

import {UiContext} from "../context/UiContextProvider";

const HistoryDetailComponent = () => {

	const [categories, setCategories] = useState([])
	const {productState} = useContext(ShoppingContext);
	const {setIsHistoryDisplayed} = useContext(UiContext);

	const {historyProducts} = productState;


	useEffect(() => {
		console.log(historyProducts);
		setCategories(getSortedCategories(historyProducts.products));
	}, []);

	const getFormatedDate = (date) => {
		return moment(date).format("ddd D MM YYYY");
	};

	const handleClickBack = () => {
		setIsHistoryDisplayed(false);
	};

	return (
		<>
			<div className="button-back" onClick={handleClickBack}>
				<img src={back} alt="back arrow icon"/>
				<span>back</span>
			</div>
			<header className="history-detailed__header">
				<h3 className="uppercase bg-font">{historyProducts.name}</h3>
				<div className="text-muted date-container"><img src={dateIcon} alt="dateicon"/> {getFormatedDate(historyProducts.date)}</div>
			</header>
			<div className="history-detailed__products">
				{
					categories.map((cat, i) => {
						const products = historyProducts.products.filter((product) => product.category.name.toLowerCase() === cat.toLowerCase());
						return (
							<HistoryListComponent key={i} cat={cat} products={products}/>
						)
					})
				}
			</div>
		</>
	)
}

export default HistoryDetailComponent
