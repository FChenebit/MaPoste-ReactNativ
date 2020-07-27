import APIKey from './config.js'

export function getAddresses(addressToCheck) {
  const url = 'https://api.laposte.fr/controladresse/v1/adresses?q=rue%20Brillat%20savarin%2075013%20Paris'
  //const url = 'https://api.laposte.fr/controladresse/v1/adresses?'
  //const url = 'blablabla'

  return fetch(url,{headers:{'x-okapi-key':APIKey}})
    .then((response) => {console.log('API' + JSON.stringify(response)); return response.json()})
   .catch((reason) => {console.log('API ' + reason); throw reason})
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
    .catch((reason) => {console.log('API adress detail ' + reason); throw reason})



}