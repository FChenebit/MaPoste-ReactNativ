import APIKey from './config.js'

export function getPostByPostalCode(postalCode) {

    const url = 'https://api.laposte.fr/datanova/v1/pointscontact?rows=20&q='
//    const url = 'Blabla'
//const url = 'https://api.laposte.fr/datanova/pointscontact'

    return fetch((url+postalCode),{headers:{'x-okapi-key':APIKey}})
      .then((response) => {
          console.log('API getPostByPostalCode OK ' + JSON.stringify(response));
          return response.json()
       })
      .catch((reason) => {console.log('API getPostByPostalCode KO ' + reason); throw reason})
  
}

export function getPostByLocation(longitude, lattitude) {

  const url = 'https://api.laposte.fr/datanova/v1/pointscontact?rows=15&geofilter.distance=46.362199%2C2.533828%2C30000'

  return fetch((url),{headers:{'x-okapi-key':APIKey}})
    .then((response) => {
        console.log('API getPostByLocation OK ' + JSON.stringify(response));
        return response.json()
     })
    .catch((reason) => {console.log('API getPostByLocation KO ' + reason); throw reason})

}