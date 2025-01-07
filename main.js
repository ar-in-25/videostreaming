const express = require('express')
const path = require('path')
const cors = require('cors')
const videorouter = require('./routes/video.route')
const authenticaterouter = require('./routes/authenticate.route')
const userrouter = require('./routes/user.route')
const commentrouter = require('./routes/comment.route')
const adminrouter = require('./routes/admin.route')
const syncer = require('./models/sync')
const ipgeoblock = require("node-ipgeoblock");
const getipaddress = require('./middlewares/getipaddress')
const createadmin  = require('./helper/createAdmin')
const helmet = require("helmet")

const app = express()

app.use(ipgeoblock({
	geolite2: "./public/GeoLite2-Country.mmdb",
	allowedCountries: [ "IN" ]
}));

// app.use(cors())

//remove strict transport security with https
app.use(helmet({
    crossOriginResourcePolicy: false,
    strictTransportSecurity: false,
}))

app.use(express.static(path.join(__dirname, "public/angular")));

//parse json data
app.use(express.json())

//get ip address of user
app.use(getipaddress)

//DB
syncer()
// createadmin()

//routes
app.use("/video", videorouter)
app.use("/authenticate", authenticaterouter)
app.use("/user", userrouter)
app.use("/comment", commentrouter)
app.use("/admin", adminrouter)

//handle any error
app.use((err, req, res, next) => {
    res.status(500).send('Something broke!')
})


//create server
app.listen(process.env.PORT, (ex) => {
    console.log(process.env.PORT)
})