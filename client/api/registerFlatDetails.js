import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/users'

// This call should GET the details given a userId
export function getUserDetails (id) {
  return request.get(`${apiURL}/${id}`)
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

export function getUserByName (email) {
  return request.get(`${apiURL}/user/${email}`)
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

export function addJobs () {
  return request.post(`${apiURL}/${id}`)
}
