import pkg from 'pg';
const {Client} = pkg;

const guestbook = new Client({
    host : 'localhost',
    port : 5432,
    password : 'root',
    user : 'postgres',
    database : "guestbook_creativeBrain",
})

export default guestbook