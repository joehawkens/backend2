const { MongoClient } = require('mongodb');


async function main() {

    const uri = "mongodb+srv://joe:123@backend2.fcwlspd.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

    async function listDatabases(client){

        const contacts = client.collection("contacts");
        console.log(contacts);

    };

    listDatabases();
     

}


main().catch(console.error);
