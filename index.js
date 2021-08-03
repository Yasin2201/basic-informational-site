const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html')
})

app.get('*', (req, res) => {
    res.send('<h1>Error 404 - Page not found</h1><a href="/">Return To Home</a>')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})