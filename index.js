const express = require('express')
const app = express()
const port = 3000

app.get('/da', (req, res) => {
    res.send('Hello Wordl in!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})