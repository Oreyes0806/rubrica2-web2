import express from 'express'
import { urlencoded } from "express"
import roomsRoutes from "./routes/roomsRoutes.js"
import { PORT } from './config.js'
import bookingsRoutes from './routes/bookingsRoutes.js'

const app = express()
app.use(express.json())
app.use(urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.use('/', roomsRoutes)
app.use('/', bookingsRoutes)
app.listen(PORT, ()=>console.log(`Servidor ejecutandose!! http://localhost:${PORT}`))
