const express = require('express')

const router = express.Router()
const familyCardController = require('../controllers/FamilyCardController')
router.use(express.static('public'))

router.get('/home', (req, res) => {
  res.render('dashboard')
})

router.get('/fam-card', familyCardController.index)
// router.get('/fam-card', (req, res) => {
//  res.render('family_card/index', {
//    famCards: [
//      {id : '000001', name:'John Doe'},
//      {id : '000002', name:'Richard Max'},
//    ]
//  })
// })

router.post('/citizen', (req, res) => {

})

router.get('/', (req, res) => {
  res.render('dashboard')
})

module.exports = router