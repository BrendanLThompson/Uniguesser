import React from 'react'

export default class APICommunicatorController {
  static GetUniversityImages = (searchParam) => { 
      return new Promise((resolve, reject) => {
          //fetch('http://192.168.4.66:25565/GetBookDetail',
          //fetch(('https://api.bing.microsoft.com/v7.0/images/search?q='+searchParam),
          fetch(('https://api.bing.microsoft.com/v7.0/images/search?q='+searchParam),

          {
              method: 'GET',
              headers: 
              {
                'Ocp-Apim-Subscription-Key' : '6f14715c119740a0b0a25454c281534a'
              }
          }
          ).then((response) => response.json())
          .then((json) => {   
              //console.log(json.value); 
              console.log(json.value[0].contentUrl);     

              resolve(json.value[0].contentUrl);
              //resolve(json); 
          })
      })
    }
  }