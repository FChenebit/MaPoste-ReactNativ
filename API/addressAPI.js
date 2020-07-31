import APIKey from './config.js'

export function getAddresses(addressToCheck) {
  const url = 'https://api.laposte.fr/controladresse/v1/adresses?q='

  return fetch((url+encodeURIComponent(addressToCheck)),{headers:{'x-okapi-key':APIKey}})
    .then((response) => {console.log('API getAddresses OK ' + JSON.stringify(response)); return response.json()})
    .catch((reason) => {console.log('API getAddresses KO ' + reason); throw reason})
}

export function getAdressDetail(addressToGetId) {

  const url = 'https://api.laposte.fr/controladresse/v1/adresses/'

  return fetch((url+addressToGetId),{headers:{'x-okapi-key':APIKey}})
    .then((response) => {
      console.log('API adress detail OK : ' + JSON.stringify(response));
      if(response.ok) {
        return response.json()
      } else {
        throw 'error, no address found'
      }
    })
    .catch((reason) => {console.log('API adress detail Error' + reason); throw reason})

}