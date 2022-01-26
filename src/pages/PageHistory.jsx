import moment from 'moment';
import React, {useEffect, useState, useContext} from 'react'
import AsideComponent from '../components/AsideComponent';
import HistoryDetailComponent from '../components/HistoryDetailComponent';
import HistoryTableComponent from '../components/HistoryTableComponent';
import {UiContext} from '../context/UiContextProvider';
import {getFetch} from '../helpers/fetchUtility';
import {removeDuplicateDates, sortByMonth} from '../helpers/sortDates';

const PageHistory = () => {

	const [sortedMonths, setSortedMonths] = useState([])
	const [purchases, setPurchases] = useState([])

	const {isShowMenu, isHistoryDisplayed} = useContext(UiContext);

	useEffect(() => {
		getFetch('/purchases/get-purchases').then(({purchases}) => {
			console.log(purchases);
			setSortedMonths(removeDuplicateDates(purchases));
			setPurchases(purchases);
		})
		.catch(console.warn);
	}, []);

	return (
		<div className="history flex-right">
			{isHistoryDisplayed === false && (
				<header>
					<h3>Shopping history</h3>
				</header>
			)}

			{isHistoryDisplayed === true ? (<HistoryDetailComponent/>) : (<HistoryTableComponent sortedMonths={sortedMonths} purchases={purchases}/>)}
			{isShowMenu === true && <AsideComponent/>}
		</div>
	);
}

export default PageHistory
