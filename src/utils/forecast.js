const request = require("request")

const forecast = (latitude,longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=c451b85b929eb7ec0461b5107202a440&query=' + latitude + ',' + longitude+'&units=f'

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service.', undefined)


        }else if (body.error){
            callback('Unable to find location.', undefined)
        }else{

            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const description = body.current.weather_descriptions[0]
            callback(undefined,description + ' It is currently ' + temperature + ' degress out. There is a ' + description + '% chance of rain.')
        }
    })

    

}

module.exports=forecast