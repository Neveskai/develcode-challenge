export const api_dir = 'http://localhost:3001';
export const file_dir = 'http://localhost:3002';

export function request(url, object, method = 'GET'){
	var config;
	if(method === 'GET'){
		config = {
			method: method,
			mode: 'cors'
		};
	} else {
		config = {
			method: method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(object)
		};
	}
	var p = fetch(url, config)
	.then(resp => resp.json())
	.then(resp => { 
		return resp; 
	})
	return p;
}

export function uploadFile(url, file) {
	const formData = new FormData();
	formData.append('files', file);
	var p = fetch(url, {
		method: 'POST',
		mode: 'cors',
		body: formData
	})
	.then(resp => resp.json())
	.then(resp => { 
		return resp; 
	})
	return p;
}