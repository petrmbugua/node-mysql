const express = require('express')
const mysql = require('mysql')

const app = express()

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234'
})

con.connect(function(err){
    if (err) throw err
    console.log('Connected')
})


app.listen(5000, () => {
    console.log('Server started at port 5000...')
})