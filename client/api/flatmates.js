import request from 'superagent'

// const apiURL = process.env.NODE_ENV === 'test' ? 'http://localhost:3000' : ''

export function getAllFlatmates (userId) {
  return request.get(`/api/v1/flatmatelist/${userId}`)
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
