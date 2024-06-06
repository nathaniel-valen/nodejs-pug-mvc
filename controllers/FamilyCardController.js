const familyCards = [
    {id: '00001', name: 'John Doe'},
    {id: '00002', name: 'John Doi'},
    {id: '00003', name: 'John Dou'},
]

const index = (req, res) => {
    console.log(familyCards)
    res.render('family_card/index', {
        familyCards: familyCards
    })
}

module.exports = { index }