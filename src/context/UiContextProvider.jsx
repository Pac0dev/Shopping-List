import { useState, createContext } from "react";

export const UiContext = createContext();
const UiContextProvider = ({ children }) => {

	const [isShowMenu, setIsShowMenu] = useState(false);
	const [isCheckEnabled, setIsCheckedEnabled] = useState(false)
	const [isProductDisplay, setIsProductDisplay] = useState(false);
	const [isHistoryDisplayed, setIsHistoryDisplayed] = useState(false);

	return (
		<UiContext.Provider
			value={{
				isShowMenu, setIsShowMenu,
				isCheckEnabled, setIsCheckedEnabled,
				isProductDisplay, setIsProductDisplay,
				isHistoryDisplayed, setIsHistoryDisplayed,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};

export default UiContextProvider;
