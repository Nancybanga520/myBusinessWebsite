const express = require('express');

const app = express();

app.use((req, res) => {
    res.send('Hi Request');
})

app.listen(3000, ()=>{
    console.log('Server Started');
})