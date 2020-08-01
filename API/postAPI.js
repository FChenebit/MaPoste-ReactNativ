import APIKey from './config.js'

export function getPostByPostalCode(postalCode) {

    const url = 'https://api.laposte.fr/datanova/v1/pointscontact?rows=20&q=75013'

    return fetch((url),{headers:{'x-okapi-key':APIKey}})
      .then((response) => {
          console.log('API getPostByPostalCode OK ' + JSON.stringify(response));
          return response.json()
       })
      .catch((reason) => {console.log('API getPostByPostalCode KO ' + reason); throw reason})
  
}