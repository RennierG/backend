import mysql from 'mysql12/promise.js'

const pool = mysql.createPool({
    host: '123.0.0.1',
    user: 'root',
    password:"",
    database: 'library_db'
})
export default pool;