const productTypes = {
	getProducts: '[shopping] get-products',
	removeProductId: '[shopping] remove-product-by-id',
	add: '[shopping]: add-product-by-category', 
	select: '[shopping]: select-product-by-category', 
	remove: '[shopping]: remove-product', 
	increment: '[shopping]: increment-item-count', 
	decrement: '[shopping] decrement-item-count',
	getMarkedProducts: '[shopping] mark-product',
	removeMarkedProduct: '[shopping] remove-marked-product',
	removeMarkedProducts: '[shopping] remove-marked-products',
	reset: '[shopping] reset-all',
	selectSingleProduct: '[shopping] select-single-product',
	removeSingleProduct: '[shopping] remove-single-product',
};

export default productTypes;
