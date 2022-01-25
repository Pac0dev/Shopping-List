import moment from "moment";

const sortByMonth = (arr = []) => {
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	arr.sort(function (a, b) {
		return months.indexOf(a) - months.indexOf(b);
	});
	return arr;
};

const removeDuplicateDates = (purchases = []) => {
	let monthArr = purchases.reduce((acc, purchase, index) => {
		acc[index] = moment(purchase.date).format("MMMM");
		return acc;
	}, []);

	monthArr = [...new Set(monthArr)];

	return sortByMonth(monthArr);
};
export { sortByMonth, removeDuplicateDates };
