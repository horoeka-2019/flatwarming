import request from 'superagent'

const apiURL = process.env.NODE_ENV === 'test' ? 'http://localhost:3000' : ''

export function addJobToFlatmate (userId, jobDetails) {
  return request.post(`/api/v1/jobs/flatmates/${userId}`)
    .send(jobDetails)
    .then(res => { const obj = {}; obj.jobDetailsByUserId = res.body; return obj })
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

export function addJobs () {
  return request.post(`/api/v1/${id}`)
}
