import { endPoints, apiUrl } from '../../constants/constant'

import { post } from './requests'

export const userService = {
  login,
  logout,
}

function login(email, password) {
  const headers = {
    accessID:
      'ZWYyZDEyN2RlMzdiOTQyYmFhZDA2MTQ1ZTU0YjBjNjE5YTFmMjIzMjdiMmViYmNmYmVjNzhmNTU2NGFmZTM5ZHx8Nzg5NTU=',
  }
  const body = JSON.stringify({ email, password })

  return post(`${apiUrl}${endPoints.LOGIN}`, body, headers)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))

      return user
    })
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user')
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout()
        // location.reload(true)
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
