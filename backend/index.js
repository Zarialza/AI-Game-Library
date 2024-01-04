const express = require('express');
const mongoose = require('mongoose');
const adminRoutes = require('./src/routes/admin');
const app = express();

const url = 'mongodb://localhost/AiGameLibrary';

app.use(adminRoutes);


var cors = require('cors')
app.use(cors())

app.use(express.json());

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on('open', () => {
  console.log('connected')
});

const userRoutes = require('./src/routes/user');
app.use('/user', userRoutes);

const gameRoutes = require('./src/routes/user');
app.use('/game', gameRoutes);

app.use((req,res,next) => {
  res.status(404).send("<h1>Page Not Found!</h1>")
});

app.listen(7000, () => {
    console.log(`app is running on 7000`)
});