const http = require('http')

// req: incoming request
// res: the resulting information to send back

const server = http.createServer((req,res) => {

    if (req.url === '/') {
        res.end("Welcome to our home page")
    }
    else if(req.url === '/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`
        <h1> Oops! </h1>
        <p> We can't seem to find that page </p>
        <a href="/"> back home </a>
        `)
    }
})

server.listen(5000)