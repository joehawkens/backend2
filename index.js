const http = require('http')
const port = 3002

const server = http.createServer(function(req, res){
    res.write('Joe Hawkins')
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log("ERROR ENCOUNTERED");
    } else {
        console.log("Connection to " + port)
    }
})