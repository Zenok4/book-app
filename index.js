const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config()
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'iahduahwduhauwdiadjiawjdaowd3424d';

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3002',
}))

mongoose.connect('mongodb+srv://NebulaF:mk29062004@cluster0.tmqlygz.mongodb.net/?retryWrites=true&w=majority');

app.get('/test', (req, res) => {
    res.json("test ok")
})

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body

    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
    
        res.json(userDoc)
    }
    catch (err) {
        res.status(422).json(err)
    }
    
})

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await User.findOne({email})

    if(userDoc) {
        const passOK = bcrypt.compareSync(password, userDoc.password)
        if(passOK) {
            jwt.sign({email: userDoc.email, id: userDoc._id}, jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc)
            })
        }
        else{
            res.status(422).json('pass NOT OK')
        }
    }
    else{
        res.json('not found')
    }
})

app.listen(4000)