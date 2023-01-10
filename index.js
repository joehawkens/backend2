const http = require('http')
const port = 3003
const dotenv = require("dotenv")
dotenv.config()



    // Connects to server ===================================================================================

    function connectToServer(){

        const server = http.createServer(function(req, res){
            res.write('Connection secured.')
            res.end()
        })
        
        server.listen(port, function(error){
            if (error){
                console.log("ERROR ENCOUNTERED");
            } else {
                console.log("Connection to " + port)
            }
        })

    }


connectToServer();
