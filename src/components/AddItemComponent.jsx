import { useState, useEffect } from "react";
import { getFetch, postFetch } from "../helpers/fetchUtility";

const AddItemComponent = ({setIsAddingItem}) => {
	const [categories, setCategories] = useState([]);
	const [formValues, setFormValues] = useState({
		name: "",
		note: "",
		image: "",
		category: "",
	});

	const { name, note, image, category } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name.trim().length < 2 || category.trim().length < 2) {
			return;
		}

		const body = {
			name,
			desc: note,
			image, 
			category: category, 
		};

		console.log(body);

		postFetch('/products/create-product', body).then(console.log).catch(console.warn)
	};

	const getCategoryId = (name) => {
		let id = '';
		if(categories.length > 0) {
			const category = categories.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
			id = category._id;
		}
		return id;
	}

	useEffect(() => {
		getFetch("/categories/get-categories")
			.then((cat) => {
				const { categories } = cat;
				setCategories(categories);
			})
			.catch(console.warn);
	}, []);

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[`${target.name}`]: target.value,
		});
	};

	const handleChangeCategoryName = (category = '') => {
		setFormValues({
			...formValues,
			category,
		})
	}

	return (
		<div className="add-item">
			<header className="add-item__header">
				<h3>Add a new item</h3>
			</header>
			<form className="add-item__form" onSubmit={handleSubmit}>
				<div className="add-item__form-field">
					<label>Name</label>
					<input
						className="add-item__form-input"
						placeholder="Enter a name"
						type="text"
						name="name"
						value={name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="add-item__form-field">
					<label>Note(optional)</label>
					<textarea
						className="add-item__form-textarea"
						placeholder="Enter a note"
						name="note"
						value={note}
						onChange={handleInputChange}
					></textarea>
				</div>
				<div className="add-item__form-field">
					<label>Image(optional)</label>
					<input
						className="add-item__form-input"
						placeholder="Enter a url"
						type="text"
						name="image"
						value={image}
						onChange={handleInputChange}
					/>
				</div>
				<div className="add-item__form-field">
					<label>Category</label>
					<input
						className="add-item__form-input"
						placeholder="Enter a category"
						type="text"
						name="category"
						value={category}
						onChange={handleInputChange}
					/>
					<div className="add-item__form-category-results">
						{categories.sort().map((cat) => (
							<span
								key={cat._id}
								className="add-item__form-category"
								onClick={() => handleChangeCategoryName(cat.name)}
							>
								{cat.name}
							</span>
						))}
					</div>
				</div>
				<div className="add-item__form-buttons">
					<input className="btn" type="button" value="cancel" onClick={() => setIsAddingItem(false)} />
					<input className="btn btn-orange" type="submit" value="Save" />
				</div>
			</form>
		</div>
	);
};

export default AddItemComponent;
