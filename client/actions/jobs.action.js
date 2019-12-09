import { setError } from './error'
import * as api from '../api/registerFlatDetails'

export const GET_JOBS_PENDING = 'GET_JOBS_PENDING'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'
export const GET_JOBSBYUSER_SUCCESS = 'GET_JOBSBYUSER_SUCCESS'

export function getJobsPending () {
  return {
    type: GET_JOBS_PENDING
  }
}

export function getJobsSuccess (jobs) {
  return {
    type: GET_JOBS_SUCCESS,
    jobs
  }
}

export function getJobs () {
  return dispatch => {
    dispatch(getJobsPending())

    return api.getAllJobs()
      .then(jobs => dispatch(getJobsSuccess(jobs.jobs)))
      .catch(err => dispatch(setError(err.message)))
  }
}

export function getJobsByUserIdSuccess (jobsDetail) {
  return {
    type: GET_JOBSBYUSER_SUCCESS,
    jobsDetail
  }
}
export function getJobsByUserId (userId, jobDetail) {
  return dispatch => {
    return api.addJobToFlatmate(userId, jobDetail)
      .then(jobDetail => dispatch(getJobsByUserIdSuccess(jobDetail.jobDetailsByUserId)))
      .catch(err => dispatch(setError(err.message)))
  }
}
