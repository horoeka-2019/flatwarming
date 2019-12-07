import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/users'

// This call should POST the details to our many, many databases
export function getUserDetails (details) {
  return request.post(`${apiURL}/register`)
    .then(res => console.log(res.body))
}

export function addUserDetail (userDetail) {
  const userId = userDetail.userId
  return request.post(`${apiURL}/register/${userId}`)
    .send(userDetail)
    .then(res => res.body)
    .catch(err => {
      if (err.message === 'Not Found') {
        throw new Error('ID not found')
      } else {
        const errorMessage = 'An unknown error has occurred'
        // eslint-disable-next-line no-console
        console.error(errorMessage)
        throw new Error(errorMessage)
      }
    })
}
