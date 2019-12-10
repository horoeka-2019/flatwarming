import request from 'superagent'

const apiURL = process.env.NODE_ENV === 'test' ? 'http://localhost:3000' : ''

// This call should GET the details given a userId
export function getUserDetails (id) {
  return request.get(`/api/v1/${id}`)
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

export function getAllJobs () {
  return request.get(`/api/v1/jobs/all`)
    .then(res => { const obj = {}; obj.jobs = res.body; return obj })
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
  return request.post(`/api/v1/register/${userId}`)
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
  return request.get(`/api/v1/user/${email}`)
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
  return request.post(`/api/v1/${id}`)
}
