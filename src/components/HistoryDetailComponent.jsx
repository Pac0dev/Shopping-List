import moment from "moment";
import {useContext, useEffect, useState} from "react"
import {ShoppingContext} from "../context/ShoppingContextProvider"
import {getSortedCategories} from "../helpers/filterProducts";
import HistoryListComponent from "./HistoryListComponent";

const HistoryDetailComponent = () => {

	const [categories, setCategories] = useState([])
	const {productState} = useContext(ShoppingContext);

	const {historyProducts} = productState;


	useEffect(() => {
		console.log(historyProducts);
		setCategories(getSortedCategories(historyProducts.products));
	}, []);

	const getFormatedDate = (date) => {
		return moment(date).format("ddd D MM YYYY");
	};

	return (
		<>
			<div className="button-back">
			</div>
			<header className="history-detailed__header">
				<h3>{historyProducts.name}</h3>
				<span>{getFormatedDate(historyProducts.date)}</span>
			</header>
			<div className="history-detailed__products">
				{
					categories.map((cat, i) => {
						const products = historyProducts.products.filter((product) => product.category.name.toLowerCase() === cat.toLowerCase());
						console.log('->', products);
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
