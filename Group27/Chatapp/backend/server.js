import express from 'express'
import dotenv from 'dotenv'

import connection from './db/mongodb.conn.js';
import router from './routes/routes.auth.js';
dotenv.config()
const PORT = process.env.PORT
const app = express();
app.use(express.json())
app.use('/api/v1/auth',router)


app.listen(PORT, () => {
    connection();
    console.log("server is running at:", PORT)
})