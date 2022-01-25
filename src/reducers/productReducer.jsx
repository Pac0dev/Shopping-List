import {
	selectProduct,
	decrementCount,
	incrementCount,
	deleteProduct,
} from "../helpers/shoppingHandler";
import productTypes from "../types/productTypes";
import purchasesType from "../types/purchasesType";

const productReducer = (initialState, action) => {
	switch (action.type) {
		case productTypes.select:
			return {
				...initialState,
				selectedProducts: selectProduct(
					initialState.selectedProducts,
					action.payload
				),
			};
		case productTypes.increment: {
			return {
				...initialState,
				selectedProducts: incrementCount(
					initialState.selectedProducts,
					action.payload
				),
			};
		}
		case productTypes.decrement: {
			return {
				...initialState,
				selectedProducts: decrementCount(
					initialState.selectedProducts,
					action.payload
				),
			};
		}
		case productTypes.remove:
			return {
				...initialState,
				selectedProducts: deleteProduct(
					initialState.selectedProducts,
					action.payload
				),
			};
		case productTypes.getMarkedProducts:
			return {
				...initialState,
				markedProducts: [
					...initialState.markedProducts,
					action.payload,
				],
			};
		case productTypes.removeMarkedProduct:
			return {
				...initialState,
				markedProducts: initialState.markedProducts.filter(
					(product) => product.id !== action.payload
				),
			};
		case productTypes.reset:
			return {
				selectedProducts: [],
				markedProducts: [],
			}
		case productTypes.selectSingleProduct: {
			return {
				...initialState, 
				product: action.payload,
			}
		}
		case productTypes.removeSingleProduct:
			return {
				...initialState, 
				product: {},
			}
		case purchasesType.addHistoryProduct: 
			return {
				...initialState,
				historyProducts: action.payload,
			}
		default:
			return initialState;
	}
};

export default productReducer;
