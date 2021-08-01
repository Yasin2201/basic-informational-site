const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 8080

const server = http.createServer((req, res) => {
    const requestedUrl = url.parse(req.url, true)
    const file = requestedUrl.pathname === '/' ? 'home.html' : `${requestedUrl.pathname.slice(1)}.html`

    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, 'Content-Type', 'text/html')
            res.end('<h1>Error</h1><a href="/">Return To Home</a>')
        }
        res.writeHead(200, 'Content-Type', 'text/html')
        res.end(data)
    })
})

server.listen(port)
