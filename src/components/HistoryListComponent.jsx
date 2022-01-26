const HistoryListComponent = ({products, cat}) => {
	return (
		<div>
			<span className="history__category">{cat}</span>
			<ul className="history-detailed__list no-list history__list">
				{
					products.map((product) => {
						return <li key={product._id} className="history__list-item">{product.name} <span className="product-count">{product.count} pcs</span></li>
					})
				}
			</ul>
		</div>
	);
};

export default HistoryListComponent;
