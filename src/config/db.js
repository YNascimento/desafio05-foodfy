//configura conexão entre app e BD para não precisar autenticar toda vez que fizer uma query
const { Pool } = require("pg") 

module.exports = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'foodfy'
})