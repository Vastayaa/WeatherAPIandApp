require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const APIurl = process.env.WEA_API_KEY;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api', async(req, res) => {
  try {
    let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.text}&appid=${APIurl}`), respJson = await resp.json();
    res.status(200).json( {state: resp.status, data: respJson} ) } catch (e) { res.status(200).json( {state: 504} ) };
})

app.listen(PORT, () => console.log(`API started on port ${PORT}`));
