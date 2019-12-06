 import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/users'

// This call should POST the details to our many, many databases
export function getUserDetails (details) {
  return request.post(`${apiURL}/register`)
    .then(res => console.log(res.body))
}
