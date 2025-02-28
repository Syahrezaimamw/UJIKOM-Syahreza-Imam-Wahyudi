import express from 'express';
import cors from 'cors'
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import db from './utils/connection.js';
import RouterAdmin from "./router/AdminRouter.js";
import RouterUser from "./router/UserRouter.js";
import RouterKendaraan from "./router/KendaraanRouter.js";
import RouterPeminjaman from "./router/PeminjamanRouter.js";
import RouterPengembalian from "./router/PengembalianRouter.js";
import RouterNotification from './router/NotificationRouter.js';

const app = express()
const port = process.env.PORT

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
})) 
app.use(fileUpload())

app.use(express.json()) 

app.use(cookieParser()) 

db.authenticate()
.then(()=>{
    console.log('terkoneksi')
})
.catch=(err)=>{
    console.log(err)
}

//? router
app.use('/admin',RouterAdmin)
app.use('/user',RouterUser)
app.use('/kendaraan',RouterKendaraan)
app.use('/peminjaman',RouterPeminjaman)
app.use('/pengembalian',RouterPengembalian)
app.use('/notif',RouterNotification)
app.use(express.static("public"))



app.listen(port,()=>{
    console.log(`aplikasi sudah berjalan di : http://localhost:${port}`)
})