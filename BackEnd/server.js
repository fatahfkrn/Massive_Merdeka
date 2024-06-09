import express from 'express';
// const mysql = require('mysql');
// const cors = require('cors');

const app = express();
// app.use(cors())

app.get('/', (req, res) => {
    return res.send('From Backend Side')
});

app.listen(8000, () => {
    console.log(`Tes Server di port 8000`);
})