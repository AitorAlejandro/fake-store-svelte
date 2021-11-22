import axios from 'axios';

const FAKE_API_URL = 'https://fakestoreapi.com';

export const fakeStoreHttp = axios.create({
	baseURL: FAKE_API_URL,
	headers: {
		'Content-type': 'application/json'
	}
});
