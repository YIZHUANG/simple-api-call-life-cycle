# simple-api-call-life-cycle

[![NPM version](NPM)](https://www.npmjs.com/package/simple-api-call-life-cycle)

## Install

```
$ npm install simple-api-call-life-cycle --save
```

## Usage

```
$ A api call lifecycle library for redux combined with redux thunk to be reused for the entire project,
from action to reducer.
```

## action.

```js
import { ApiCall } from 'simple-api-call-life-cycle';
// Passing the type and define the action.
const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const fetchProductsAction = new ApiCall(FETCH_PRODUCTS);
const fetchProductsRequest = axios.get('url');

export const fetchProducts = fetchProductsAction.fetch.bind(
  fetchProductsAction,
  fetchProductsRequest
);
export { fetchProductsAction };
```

## reducer.

```js
import { fetchProductsAction } from '../actions';

const INITIAL_STATE = {
  isInProgress: undefined,
  isCompleted: undefined,
  hasFailed: undefined,
  products: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case fetchProductsAction.init:
    // set loading to be true.
    case fetchProductsAction.success:
    // Promise resolved
    case fetchProductsAction.fail:
    //
    default:
      return state;
  }
};
```

## components.

```componentDidMount
if(!state.isCompleted) {
  fetchProducts();
}
```

```componentWillReceiveProps
if(this.props.state.isInProgress && !nextProps.state.isCompleted) {
  fetchProducts()
}
```

```render
if(!state.isCompleted || state.isInProgress) {
  return <loader />
}
```
