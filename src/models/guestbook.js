import pkg from 'pg';
const {Client} = pkg;

const guestbook = new Client({
    host : process.env.host,
    port : process.env.port,
    user : process.env.user,
    password : process.env.password,
    database :process.env.database,
})


export default guestbook