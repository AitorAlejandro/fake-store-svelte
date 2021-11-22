import { ProductApi, Product } from '../../entities';
import { fakeStoreHttp } from '../FakeStoreHttp';

export const FakeStoreHttpProductService: ProductApi = {
	async getProducts() {
		const response = fakeStoreHttp.get<Array<Product>>('/products');
		return (await response).data;
	}
};
