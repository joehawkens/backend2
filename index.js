const http = require('http');
const port = 3003;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
require('dotenv').config();
//console.log(process.env);
const connectionString = process.env.DB_URI;


    // Connects to server + Database ===================================================================================

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

        mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });

    }


    connectToServer();
