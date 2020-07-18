const express = require ('express')
const bodyParser = require ('body-parser')
const restaurantRoutes = require ('./restaurant/restaurant.routes.js')

const app = express ()

app.use(bodyParser.json())

app.use('/api/v1', restaurantRoutes)






module.exports = app