const { MongoClient } = require("mongodb")
require("dotenv").config({path: "./config.env"})

async function main(){
    const db = process.env.ATLAS_URI;
    const dotenv  = require('dotenv');
const expand  = require('dotenv-expand');
expand.expand(dotenv.config({ path: './config.env' }));
    const client = new MongoClient(db)
            try{
        await client.connect()
        const collections = await client.db("Falcon").collections()
        collections.forEach((collection) => console.log(collection.collectionName))
            }catch(e){
                console.error(e)
            }
}
main()