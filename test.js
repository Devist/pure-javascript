/**
 * filter-through-function
 */

describe("inArray", function () {
  let arr = [1, 2, 3, 4, 5, 6, 7]

  it("returns the filter for values in array", function () {
    let filter = inArray(arr)
    assert.isTrue(filter(5))
    assert.isFalse(filter(0))
  })
})

describe("inBetween", function () {
  it("returns the filter for values between", function () {
    let filter = inBetween(3, 6)
    assert.isTrue(filter(5))
    assert.isFalse(filter(0))
  })
})

/**
 * sort-by-field
 */

describe("byField", function () {
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ]

  it("sorts users by name", function () {
    let nameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" }
    ]
    let nameSortedAnswer = users.sort(byField("name"))
    assert.deepEqual(nameSortedKey, nameSortedAnswer)
  })

  it("sorts users by age", function () {
    let ageSortedKey = [
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" }
    ]
    let ageSortedAnswer = users.sort(byField("age"))
    assert.deepEqual(ageSortedKey, ageSortedKey)
  })

  it("sorts users by surname", function () {
    let surnameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" }
    ]
    let surnameSortedAnswer = users.sort(byField("surname"))
    assert.deepEqual(surnameSortedAnswer, surnameSortedKey)
  })
})

/**
 * make army
 */

describe("army", function () {
  let army

  before(function () {
    army = makeArmy()
    window.alert = sinon.stub(window, "alert")
  })

  it("army[0] shows 0", function () {
    army[0]()
    assert(alert.calledWith(0))
  })

  it("army[5] shows 5", function () {
    army[5]()
    assert(alert.calledWith(5))
  })

  after(function () {
    window.alert.restore()
  })
})
