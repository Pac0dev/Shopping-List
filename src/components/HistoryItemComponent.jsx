import moment from "moment";
import { useContext } from "react";
import { ShoppingContext } from "../context/ShoppingContextProvider";
import {UiContext} from "../context/UiContextProvider";
import purchasesType from "../types/purchasesType";

const HistoryItemComponent = ({ purchase }) => {
	const { productDispatch } = useContext(ShoppingContext);
	const {setIsHistoryDisplayed} = useContext(UiContext);
	const { name, date, status, button } = purchase;

	const getFormatedDate = (date) => {
		return moment(date).format("ddd D MM YYYY");
	};

	const handleClickHistoryItem = () => {
		productDispatch({
			type: purchasesType.addHistoryProduct,
			payload: purchase,
		});
		setIsHistoryDisplayed(true);
	};

	return (
		<div className="history-item" onClick={handleClickHistoryItem}>
			<span className="history-item__name">{name}</span>
			<span className="history-item__date text-muted">
				{getFormatedDate(date)}
			</span>
			<span className="history-item__status">completed</span>
			<div className="history-item__button"></div>
		</div>
	);
};

export default HistoryItemComponent;
