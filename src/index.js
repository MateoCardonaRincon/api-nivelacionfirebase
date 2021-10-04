const express  =require('express');
const morgan = require('morgan');

const app = express();

//Settings

app.set('port',5000)

//Middlewares

app.use(morgan('dev'));
app.use(express.json());

//Routes

app.use('/api/users',require('./routes/users.routes'));

app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'))
});