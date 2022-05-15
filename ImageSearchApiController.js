import React, { Component } from 'react'
import fetch from 'node-fetch';

type Results = {
  value: string;
};

type GetResultsResponse = {
  data: Results[];
};

async function GetUniversityImages(searchParam) {
  try {
    // 👇️ const response: Response
    const response = await fetch(('https://bing-image-search1.p.rapidapi.com/images/search?q='+searchParam), {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key' : '5b4a0ba84amsh75dac027222b54fp15ba82jsnefe3c60442cd'
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // 👇️ const result: GetResultsResponse
    let result = await response.json();
    result = result.value[0].webSearchUrl;

    //console.log('result is: ', result);
    //console.log('result is: ', JSON.stringify(result, null, 4));

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

/* function SetUniversityImages(searchParam) {
   GetUniversityImages(searchParam).then(
      (result) =>
      {
         console.log("result: ", result)
         return (data);
      })  
   
} */
export default GetUniversityImages;