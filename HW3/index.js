const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "counter.json");



app.get('/', (req, res) => {
    const urlFile = JSON.parse(fs.readFileSync(pathToFile));
    let counter1 = urlFile['/'];
    counter1++;
    res.send(`<h1> Корневая страница </h1> <p>Просмотров ${counter1}</p> <a href="./about"> Ссылка на страницу /about</a>`);
    urlFile['/'] = counter1;
    fs.writeFileSync(pathToFile, JSON.stringify(urlFile));
})
app.get('/about', (req, res) => {
    const urlFile = JSON.parse(fs.readFileSync(pathToFile));

    let counter2 = urlFile['/about'];
    counter2++;
    res.send(`<h1> Страница / about </h1> <p>Просмотров ${counter2}</p> <a href="/"> Ссылка на страницу / </a>`);
    urlFile['/about'] = counter2;
    fs.writeFileSync(pathToFile, JSON.stringify(urlFile));
})


app.listen(3000);