const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorMiddleWare = require('./middleware/error')
const connectDB = require('./utils/connectdb')
const dotenv=require('dotenv')
 
dotenv.config({path:'.env'})
connectDB()


//Router imports
const userRouter = require('./routes/userRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');
const spaceRouter = require('./routes/spaceRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
}));

app.use(errorMiddleWare)

//Base Routes
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/comment',commentRouter);
app.use('/space',spaceRouter);

app.get('/', (req, res) => {
    res.send('HOME');
})

app.get('*', (req, res) => {
    res.send('Error 404!');
})

app.listen(PORT, () => {
    console.log(`Serving on PORT ${PORT}`);
})