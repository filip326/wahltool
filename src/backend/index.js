const fs = require('fs')
const path = require('path')

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join('.', 'src', 'frontend', 'templates'))

app.use(express.static(path.join('.', 'src', 'frontend', 'public')))

const http = require('http')
const server = http.createServer(app)
server.listen(80)