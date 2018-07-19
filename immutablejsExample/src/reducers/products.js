import { List, Map } from 'immutable';
import { fetchProductsAction } from '../actions';

const INITIAL_STATE = Map({
  isInProgress: undefined,
  isCompleted: undefined,
  hasFailed: undefined,
  products: new List()
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case fetchProductsAction.init:
      return state.set('isInProgress', true);
    case fetchProductsAction.success:
      return state
        .set('products', action.payload.data)
        .set('isInProgress', false)
        .set('isCompleted', true);
    case fetchProductsAction.fail:
      return state.set('hasFailed', 'true').set('isInProgress', false);
    default:
      return state;
  }
};
