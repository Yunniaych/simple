const express = require('express');
const path = require('path');
const port = 5000

const app = express();

app.get('/', (req,res) => {
    res.sendFile("C:\\Users\\anniy\\OneDrive\\Desktop\\pagina\\main.html");
});

app.get('/historia', (req,res) => {
   res.sendFile("C:\\Users\\anniy\\OneDrive\\Desktop\\pagina\\historia.html")
});

app.get('/otro', (req,res) => {
    res.sendFile("C:\\Users\\anniy\\OneDrive\\Desktop\\pagina\\otro.html")
});

app.listen (port, () => {
    console.log('Server on port 5000');
});
