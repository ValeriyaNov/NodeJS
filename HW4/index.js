const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");
const pathToFile = path.join(__dirname, 'users.json');
const joi = require('joi');

const schema = joi.object({
    firstName: joi.string()
        .min(3)
        .max(30)
        .required(),
    lastName: joi.string()
        .min(3)
        .max(300)
        .required(),
    age: joi.number()
        .integer()
        .min(18)
        .required(),
    city: joi.string()
        .min(1)
        .max(30)
        .required(),
})
let uniqueID = 1;
app.use(express.json());
app.get('/users', (req, res) => {
    res.send(fs.readFileSync(pathToFile));
});

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathToFile));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});
app.post('/users', (req, res) => {
    uniqueID += 1;
    const users = JSON.parse(fs.readFileSync(pathToFile));
    users.push({
        id: uniqueID,
        ...req.body
    });
    fs.writeFileSync(pathToFile, JSON.stringify(users, null, 2));
    res.send({
        id: uniqueID
    });
});
app.put('/users/:id', (req, res) => {
    const result = schema.validate(req.body);

    if (result.error) {
        return res.status(404).send({ error: result.error.details });
    }

    const users = JSON.parse(fs.readFileSync(pathToFile));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFileSync(pathToFile, JSON.stringify(users, null, 2));
        res.send({
            user
        });
    } else {
        res.status(404);
        res.send({ user: null });
    }
});
app.delete('/users/:id', (req, res) => {

    const users = JSON.parse(fs.readFileSync(pathToFile));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        fs.writeFileSync(pathToFile, JSON.stringify(users, null, 2));
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null });
    }



});
app.listen(3000);
console.log('порт');