class lifecycle {
  constructor({ init, success, fail }) {
    this.init = init;
    this.success = success;
    this.fail = fail;
  }
}
class apiCall extends lifecycle {
  constructor(key) {
    super({
      init: `${key}_INIT`,
      success: `${key}_SUCCESS`,
      fail: `${key}_FAIL`
    });
    this.key = key;
  }
  fetch(apiFun) {
    return dispatch => {
      dispatch({
        type: this.init
      });
      apiFun
        .then(response => {
          dispatch({
            type: this.success,
            payload: response
          });
        })
        .catch(error => {
          dispatch({
            type: this.fail,
            payload: error
          });
        });
    };
  }
}
export { apiCall };
