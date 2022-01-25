const URL = process.env.REACT_APP_BASE_URL;

const getFetch = ( endpoint = '' ) => {

	return new Promise((resolve, reject) => {
		fetch( URL + endpoint ).then( (response) => response.json() ).then((data) => {
			resolve(data);
		}).catch((err) => reject(err, 'failed in fetch file'));
	});
};

const postFetch = ( endpoint = '', body = {} ) => {

	const obj = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	}

	return new Promise((resolve, reject) => {
		fetch( URL + endpoint, obj ).then((response) => response.json()).then((data) => {
			resolve(data);
		})
		.catch((err) => reject(err));
	})
}

export {
	getFetch,
	postFetch,
}