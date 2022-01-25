

const selectProduct = (products = [], payload = {}) => {
	console.log(products)
	const productFounded = products.find((product) => product._id === payload._id);

	if(productFounded === undefined) {
		payload['count'] = Number(1);
		products = [...products, payload];
	} else if( productFounded !== undefined){
		products = products.map((product) => {
			if(product._id === productFounded._id) {
				product['count'] = product['count'] + Number(1);
			}
			return product;
		});
	}
	return products;
};


const incrementCount = (products = [], _id) => {
	products = products.map((product) => {
		if(product._id === _id) {
			product['count'] = product['count'] + Number(1);
		}
		return product;
	});
	return products;
};

const decrementCount = (products = [], _id) => {
	products = products.map((product) => {
		if(product._id === _id) {
			product['count'] = product['count'] >= 2 ? product['count'] - Number(1) : Number(1);
		}
		return product;
	});
	return products;
};

const deleteProduct = (products = [], _id) => {
	products = products.filter((product) => product._id !== _id);
	return products;
}

export {selectProduct, incrementCount, decrementCount, deleteProduct};