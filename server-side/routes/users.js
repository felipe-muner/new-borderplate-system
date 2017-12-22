var express = require('express')
var router = express.Router()

let arrayUsers = [
  {id: 1,nome:'felipe muner'},
  {id: 2,nome:'felipe 2 muner'},
  {id: 3,nome:'felipe 3 muner'},
  {id: 4,nome:'felipe 4 muner'},
  {id: 5,nome:'felipe 5 muner'}
]

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(arrayUsers)
})

module.exports = router
