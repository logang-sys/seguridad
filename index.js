const express = require('express')
const app = express()

app.set('port', process.env.PORT || 8000)
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes'))
app.listen(app.get('port'), ()=>{
    console.log('servidor en puerto', app.get('port'))
})