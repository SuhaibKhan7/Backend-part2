const express = require('express')
const Redis = require('ioredis')

const redis = new Redis()

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    res.send("This is the home page")
})
app.post('/submit', async (req, res) => {

    const { problemid, userid, code } = req.body
    await redis.lpush('submission', JSON.stringify({ problemid, userid, code }))
    res.json({ message: "Code submitted successfully" })
})
app.listen(3000, () => {
    console.log("server is running 3000")
})