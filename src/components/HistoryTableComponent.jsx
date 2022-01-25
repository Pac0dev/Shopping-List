import moment from "moment";
import HistoryItemComponent from "./HistoryItemComponent";

const HistoryTableComponent = ({ sortedMonths = [], purchases = [] }) => {
	return (
		<>
			{sortedMonths.map((month, index) => {
				const purchasesByMonth = purchases
					.filter(
						(purchase) =>
							moment(purchase.date).format("MMMM") === month
					)
					.map((pur) => (
						<HistoryItemComponent key={pur._id} purchase={pur} />
					));
				return (
					<div className="history-content" key={index}>
						<h3 className="history__month">{month}</h3>
						{purchasesByMonth}
					</div>
				);
			})}
		</>
	);
};

export default HistoryTableComponent;
