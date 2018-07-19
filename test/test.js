import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchAction, fetchFail, fetchSuccess } from './actions';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_INIT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('It gets the correct key and gets correct lifecycle event', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  test('gets init key correctly', () => {
    expect(fetchAction.init).toBe(FETCH_PRODUCTS_INIT);
  });
  test('gets success key correctly', () => {
    expect(fetchAction.success).toBe(FETCH_PRODUCTS_SUCCESS);
  });
  test('gets fail lifecycle key', () => {
    expect(fetchAction.fail).toBe(FETCH_PRODUCTS_FAIL);
  });

  it('gets init and fail lifecycle correctly', () => {
    const store = mockStore();
    return store.dispatch(fetchFail()).then(() => {
      expect(store.getActions()[0].type).toEqual(fetchAction.init);
      expect(store.getActions()[1].type).toEqual(fetchAction.fail);
    });
  });
  it('gets init and success lifecycle correctly ', () => {
    const store = mockStore();
    return store.dispatch(fetchSuccess()).then(() => {
      expect(store.getActions()[0].type).toEqual(fetchAction.init);
      expect(store.getActions()[1].type).toEqual(fetchAction.success);
    });
  });
});
