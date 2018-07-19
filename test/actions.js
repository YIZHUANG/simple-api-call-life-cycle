import axios from 'axios';
import { ApiCall } from '../index';
import { FETCH_PRODUCTS } from './types';

const fetchAction = new ApiCall(FETCH_PRODUCTS);
const fakeRequest = axios.get('/products');
const realRequest = axios.get(
  'https://api.mlab.com/api/1/databases/products/collections/products?apiKey=QzYgogyDY6w3wGUkVm1nvbrgoMKwKTlI'
);
const fetchFail = fetchAction.fetch.bind(fetchAction, fakeRequest);
const fetchSuccess = fetchAction.fetch.bind(fetchAction, realRequest);

export { fetchAction, fetchFail, fetchSuccess };
