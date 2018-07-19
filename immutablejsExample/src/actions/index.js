import axios from 'axios';
import { apiCall } from 'simple-api-call-life-cycle';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const fetchProductsAction = new apiCall(FETCH_PRODUCTS);
const fetchProductsRequest = axios.get(
  'https://api.mlab.com/api/1/databases/products/collections/products?apiKey=QzYgogyDY6w3wGUkVm1nvbrgoMKwKTlI'
);

export const fetchProducts = fetchProductsAction.fetch.bind(
  fetchProductsAction,
  fetchProductsRequest
);
export { fetchProductsAction };
