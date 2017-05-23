import * as types from './actionTypes';

export function connect(navProps, res) {
  return {
    type: types.CONNECT,
    nav: navProps,
    data: res
  }
}
