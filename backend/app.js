import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import cookieParser from 'cookie-parser';
import userRouters from './routes/user.routes.js';

connect();


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/users', userRouters)



app.get('/', (req, res) => {
    res.send('Base route in running');
});

export default app;