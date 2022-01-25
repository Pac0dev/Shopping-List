const getFilteredProducts = (products = [], searchText = '') => {
	
	if( searchText.length === 0  )  {
		return products;
	}

	const filteredProducts = products.filter((product) => {
		const {name = ''} = product;

		if(name.toLowerCase().includes(searchText.toLowerCase())) {
			return true;
		}
		return false;

	});
	return filteredProducts;
}



const getSortedCategories = (selectedProducts = []) => {
	let categories = selectedProducts.map((product) =>
		product.category.name.toLowerCase()
	);
	categories = categories
		.sort()
		.filter((cat, i) => categories.indexOf(cat) === i);
	return categories;
};
export {getFilteredProducts, getSortedCategories};
