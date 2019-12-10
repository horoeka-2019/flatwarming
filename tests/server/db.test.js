const db = require('../../server/db/users')
const env = require('./test-environment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('getUserByName function', () => {
  it('get user by email', () => {
    const email = 'row1@gmail.com'
    const expected = {
      id: 1,
      email: "row1@gmail.com",
      hash: "x1235r"
    }

    return db.getUserByName(email, testDb)
      .then(user => {
        const actual = user
        expect(actual).toEqual(expected)
      })

  })
})

describe('getUserDetail database function', () => {
  it('get correct user details', () => {
    const id = 1
    const expected = {
      id: 1,
      email: "row1@gmail.com",
      password: "x1235r",
      usersId: 1,
      address: "rowValue1 street",
      suburb: "suburb1",
      dayOfWeek: "day1",
      names: "rowValue1",
      powerDay: "11",
      waterDay: "22",
      wifiDay: "33"
  }

    return db.getUserDetail(id,testDb)
      .then(user => {
        const actual = user
        expect(actual).toEqual(expected)
      })
  })
})

describe('job list', () => {
  it('getJobList to get a list of job', () => {
    const expected = 4

    return db.getJobsList(testDb)
      .then(jobs => {
        const actual = jobs.length
        expect(actual).toEqual(expected)
      })
  })
})



