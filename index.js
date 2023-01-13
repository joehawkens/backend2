const http = require('http')
const port = 3003
const dotenv = require("dotenv")
const mongoose = require("mongoose");
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

        mongoose.connect("mongodb+srv://goe:123@backend2.fcwlspd.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });

    }


connectToServer();
