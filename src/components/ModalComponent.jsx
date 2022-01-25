import { useEffect } from 'react';
import ReactDOM from 'react-dom';
const ModalComponent = ({children}) => {
	const portal = document.createElement('div');

	useEffect(() => {
		document.body.appendChild(portal);
		return () => {
			portal.remove();
		}
	}, [portal])

	return ReactDOM.createPortal(children, portal);
}

export default ModalComponent
