import { GET_JOBS_SUCCESS, GET_JOBSBYUSER_SUCCESS } from '../actions/jobs.action'

const initialState = {
  jobs: [],
  jobsDetail: []
}
export default function jobsReducer (state = initialState, action) {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      return { ...state, jobs: action.jobs }
    case GET_JOBSBYUSER_SUCCESS:
      return { ...state, jobsDetail: action.jobsDetail }
    default:
      return state
  }
}
