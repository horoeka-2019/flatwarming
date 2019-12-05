const db = require('../../server/db/users')
const env = require('./test-environment')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

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
      wifiDay: "33",
      job: "rowValue1"
  }

    return db.getUserDetail(id,testDb)
      .then(user => {
        const actual = user
        expect(actual).toEqual(expected)
      })
  })
})

