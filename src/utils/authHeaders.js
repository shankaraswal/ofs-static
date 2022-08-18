export function authHeader() {
  // return authorization header with jwt token
  const user = JSON.parse(localStorage.getItem('user'))
  let headerObj = {}
  if (user && user.token) {
    headerObj = { Authorization: `Bearer , ${user.token}` }
  }
  return headerObj
}
