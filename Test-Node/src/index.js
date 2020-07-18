const server = require ('./app/app')
const config = require ('./config/server')



server.listen(config.SERVER_PORT, () => {
    console.log(`######################
###### API REST ######
######################`)
        console.log(`Server is running at port ${config.SERVER_PORT}`)
        console.log(`###############################`)
})

