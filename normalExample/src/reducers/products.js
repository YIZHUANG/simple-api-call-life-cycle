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
      return { isInProgress: true, ...state };
    case fetchProductsAction.success:
      return {
        isInProgress: false,
        isCompleted: true,
        products: action.payload.data
      };
    case fetchProductsAction.fail:
      return { isInProgress: false, hasFailed: true, ...state };
    default:
      return state;
  }
};
