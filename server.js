const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const tools = require('./routes/tools.js')

const PORT = 1339
const staticFolder = path.join(__dirname, 'public')


//Middleware
app.use( express.json() )
app.use( cors() )
app.use( express.static(staticFolder) )

app.use((req, res, next) =>{
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})


// Routes
app.get('/', (req, res) => {
	res.send('Firebase Toolshop')
})


// REST API for /tools
app.use('/tools', tools)


app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})