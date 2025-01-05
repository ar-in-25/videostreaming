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

const app = express()

//dev
app.use(getipaddress)
// app.use(ipgeoblock({
// 	geolite2: "./public/geolite2-country-ipv4.mmdb",
// 	allowedCountries: [ "IN" ]
// }));
app.use(express.static(path.join(__dirname, "public/angular")));

//local
// app.use(cors())


app.use(express.json())


syncer()
// createadmin()
app.use("/video", videorouter)
app.use("/authenticate", authenticaterouter)
app.use("/user", userrouter)
app.use("/comment", commentrouter)
app.use("/admin", adminrouter)

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Something broke!')
})



app.listen(process.env.PORT, (ex) => {
    console.log(process.env.PORT)
})