import type { Product } from "./";

export interface ProductApi {
  getProducts(): Promise<Array<Product>>;
}
