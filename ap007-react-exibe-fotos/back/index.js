const axios = require('axios')
const cors = require('cors')
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/search', async function (req, res) {
    const pexelsClient = axios.create({
        baseURL: 'https://api.pexels.com/v1',
        headers: {
            Authorization: process.env.PEXELS_API_KEY
        }
    })
    const { data } = await pexelsClient.get('/search', {
        params: {
            query: req.query.query
        }
    })
    console.log(data)
    res.json(data)
})

const port = 3000
app.listen(port, () => console.log(`Backend. Porta ${port}`))