const express = require ('express')
const router = express.Router()
const restaurants = require ('../sampleRestaurant')

const errorMessage = 'An error has occurred, please try again or contact the administrator'
const errorRestaurant = "The name of the restaurant already exists"


router
            .post('/restaurants', async (req, res) =>{
                try {
                        const {name, kindOfRestaurant, specials} = req.body

                        if (name && kindOfRestaurant && specials) {      
                                const resultado = restaurants.find( restaurant => restaurant.name === name)                    

                                if (resultado != undefined) {
                                    console.log("The name of the restaurant already exists")
                                    res.status(400).json({error: errorRestaurant})                                    
                                } else {                                    
                                    const newRestaurant = {name, kindOfRestaurant, specials}
                                    restaurants.push (newRestaurant)
                                } 

                            } else {
                                res.status(500).json({error: "An error has occurred"})
                            }

                        console.log(restaurants)
                        res.status(201).json(restaurants)  

                } catch (error) {
                        res.status(500).json({error: errorMessage})
                }
            })

            .get('/restaurants', async (req, res) =>{
                try {   
                        console.log(restaurants)
                        res.status(200).json(restaurants)

                } catch (error) {
                        res.status(500).json({error: errorMessage})
                }
            })

            .get('/restaurants/:kind', async (req, res) =>{
                try {
                        const kind = req.params.kind                     
                        const arrayKind = restaurants.filter(restaurant => restaurant.kindOfRestaurant === kind)
                        
                        console.log(arrayKind)
                        res.status(200).json(arrayKind) 
                        
                } catch (error) {
                        res.status(500).json({error: errorMessage}) 
                }
        })





module.exports = router