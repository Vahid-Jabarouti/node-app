const request = require('request')

const geocode = (address, callback) => {
 const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidmFoaWQ3MTkiLCJhIjoiY2txdWc1aDJsMDQ5cTJ2cXA1N2xldW0wZSJ9.On1LsOuow8Ytvo0SJkOSRg&limit=1' 

 request({url: url, json: true}, (error, response) => {
  if (error) {
     callback('unable to connect to location services', undefined)
  } else if (response.body.features.length === 0) {
    callback('Unable to find location. try another search.', undefined)
  } else {
    callback(undefined, {
      latitude: response.body.features[0].center[0],
      longtitude: response.body.features[0].center[1],
      location: response.body.features[0].place_name
    })
  }
 })
}

module.exports = geocode
