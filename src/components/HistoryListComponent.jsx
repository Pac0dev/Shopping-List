const HistoryListComponent = ({products, cat}) => {
	return (
		<div>
			<h3>{cat}</h3>
			<ul className="history-detailed__list no-list history__list">
				{
					products.map((product) => {
						return <li key={product._id} className="history__list-item">{product.name}</li>
					})
				}
			</ul>
		</div>
	);
};

export default HistoryListComponent;
