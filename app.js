import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import configdb from './config/db.js'
import router from './router/timeRouter.js'
dotenv.config();
const port =process.env.PORT || 5000
const app =express()
app.use(express.json())
app.use(cors())


configdb()

app.use('/api', router)
app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(port, ()=>{
    console.log(`Sever run on port : ${port}`);
})