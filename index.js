const express = require('express');;
const app = express();


app.get('/', (req, res) => {
    res.json({ message: "App works" })
})

app.listen(4500, () => {
    console.log('App running on port 4500')
})