const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, "users.json");

let uniqueID = 1;
app.use(express.json());
app.get('/users', (res, req) => {
    res.send(fs.readFileSync(pathToFile));
});

// app.get('/users/:id', (req, res) => {
//     const user = users.find((user) => user.id === Number(req.params.id));
//     if (user) {
//         res.send({ user });
//     } else {
//         res.status(404);
//         res.send({ user: null });
//     }
// });


app.listen(3000);