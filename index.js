import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from 'body-parser'
import guestbook from './src/models/guestbook.js'
import router from './src/router/router_guest.js'

const port = 4001

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

guestbook.connect((err) => {
    if(!err) return console.log('database connected')
    console.log('database not connected')
   })
   

app.listen(port,() => {
    console.log('Connect in port ' + port)
})


