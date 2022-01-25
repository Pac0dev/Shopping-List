import moment from "moment";
import { createContext, useReducer } from "react";
import { getFetch, postFetch } from "../helpers/fetchUtility";
import productReducer from "../reducers/productReducer";

export const ShoppingContext = createContext();

const ShoppingContextProvider = ({ children }) => {

	const [productState, productDispatch] = useReducer(productReducer, {
		selectedProducts: [],
		markedProducts: [],
		historyProducts: [],
	});

	const savePurchase = (name = '', products) => {

		const DATE_FORMAT = 'DD-MMM-YYYY';

		const body = {
			name: name,
			date: moment().format(DATE_FORMAT),
			products: products,
		};

		return new Promise((resolve, reject) => {
			postFetch('/purchases/create-purchase', body).then((res) => {
				resolve(res);
			})
			.catch((err) => reject(err));
		});
	}

	return (
		<ShoppingContext.Provider
			value={{
				productState,
				productDispatch,

				savePurchase,

			}}
		>
			{children}
		</ShoppingContext.Provider>
	);
};
export default ShoppingContextProvider;
