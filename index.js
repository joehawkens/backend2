const http = require('http');
const port = 3003;
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
require('dotenv').config();
//console.log(process.env);
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@coding-blog-t0xf0.mongodb.net/<dbname>`


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
