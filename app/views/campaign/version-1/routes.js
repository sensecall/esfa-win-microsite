const express = require('express')

const router = new express.Router()

router.post('/question-1', (req, res) => {
	var bespoke = req.body['bespoke-guidance']
	if (bespoke === 'true') {
		res.redirect(`question-2`)
	} else {
		res.redirect(`task-list`)
	}
})

router.get('/costs', (req, res) => {
	var currentPage = 'costs'
	res.redirect('costs-of-employing-an-apprentice',{currentPage})
})

router.get('/costs-of-employing-an-apprentice', (req, res) => {
	var currentPage = 'costs'
	res.render(`${req.version}/${req.sprint}/costs-of-employing-an-apprentice`,{currentPage})
})

router.get('/', (req, res) => {
	var currentPage = 'home'
	res.render(`${req.version}/${req.sprint}/index`,{currentPage})
})

router.get('/about', (req, res) => {
	var currentPage = 'about'
	res.render(`${req.version}/${req.sprint}/about`,{currentPage})
})

module.exports = router
