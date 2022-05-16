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
                'Ocp-Apim-Subscription-Key' : '1793175579da405a88f9a56aed223862'
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