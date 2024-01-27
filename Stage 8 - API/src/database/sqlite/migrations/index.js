import sqliteConnection from "../sqliteConnection.js";
import createUsers from "./createUsers.js";

export default async function migrationRun(){
    const schemas = [
        createUsers
    ].join('');

    try{
        const database = await sqliteConnection();
        database.exec(schemas);
    }catch(e){
        console.error(e);
    }
}