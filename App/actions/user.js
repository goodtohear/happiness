export const USER_LOGGED_IN = 'USER_LOGGED_IN'

export function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    user: user
  }
}
