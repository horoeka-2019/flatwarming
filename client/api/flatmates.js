import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1/users'

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
