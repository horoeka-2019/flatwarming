import request from 'superagent'

const apiURL = '/api/v1/users'

export function getAllFlatmates (userId) {
  return request.get(`${apiURL}/flatmatelist/${userId}`)
    .then(res => { const obj = {}; obj.flatmates = res.body; return obj })
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

export function removeFlatmateByUserId (userId, flatmateId) {
  return request.delete(`${apiURL}/flatmatelist/${userId}/${flatmateId}`)
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

export function addFlatmateByUserId (userId, flatmate) {
  const obj = {}
  obj.name = flatmate
  return request.post(`${apiURL}/flatmates/${userId}/`)
  .send(obj)
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
// addFlatmateByUserId
