const app = require('express')()
const door = 3000


app.listen(door, () => {
console.log(`Server is running on port ${door}!`)
})