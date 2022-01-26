import { useContext, useState } from "react";
import { ShoppingContext } from "../context/ShoppingContextProvider";
import { UiContext } from "../context/UiContextProvider";
import productTypes from "../types/productTypes";
import ModalComponent from "./ModalComponent";

const SaveItemComponent = ({isSaveButtonEnabledl}) => {
	const [name, setName] = useState("");
	const [isShowModal, setIsShowModal] = useState(false);
	const { productState, productDispatch, savePurchase } =
		useContext(ShoppingContext);
	const { setIsShowMenu, setIsCheckedEnabled, isCheckEnabled } =
		useContext(UiContext);

	const { selectedProducts, markedProducts } = productState;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim().length > 3) {
			setIsCheckedEnabled(true);
		} else {
			console.log("the name's lenght is too short");
		}
	};

	const handleSave = () => {
		savePurchase(name, markedProducts)
			.then((res) => {
				productDispatch({
					type: productTypes.reset,
				});
				setIsShowMenu(false);
			})
			.catch((err) => console.log(err));
	};

	const handleCancelPurchase = () => {
		productDispatch({
			type: productTypes.reset,
		});
		setIsShowModal(false);
		setIsCheckedEnabled(false);
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			{isCheckEnabled === false ? (
				<div className={`form__input-container ${selectedProducts.length === 0 && 'disabled'}`}>
					<input
						className="form__input"
						type="text"
						placeholder="Enter a name..."
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className="form__button"
						type="submit"
						value="Save"
						disabled={selectedProducts.length === 0 ? true : false}
					/>
				</div>
			) : (
				<div className="form__buttons">
					<input
						className="btn"
						type="submit"
						value="Cancel"
						onClick={() => {
							setIsShowModal(true);
						}}
					/>
					<input
						className="btn btn-success"
						type="submit"
						value="Complete"
						onClick={handleSave}
					/>
				</div>
			)}
			{isShowModal === true && (
				<ModalComponent>
					<div className="overlay">
						<div className="modal">
							<header className="modal__header">
								<p>
									Are you sure that you want to cancel this
									list?
								</p>
							</header>
							<div className="modal__content">
								<div className="modal__buttons">
									<button
										className="btn"
										type="button"
										onClick={() => setIsShowModal(false)}
									>
										Cancel
									</button>
									<button
										className="btn btn-danger"
										type="button"
										onClick={handleCancelPurchase}
									>
										Yes
									</button>
								</div>
							</div>
						</div>
					</div>
				</ModalComponent>
			)}
		</form>
	);
};

export default SaveItemComponent;
