import APIKey from './config.js'

export function getAddresses(addressToCheck) {
  const url = 'https://api.laposte.fr/controladresse/v1/adresses?q=rue%20Brillat%20savarin%2075013%20Paris'

  return fetch(url,{headers:{'x-okapi-key':APIKey}})
    .then((response) => response.json())    
}