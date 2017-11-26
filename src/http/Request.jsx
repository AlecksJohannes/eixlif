import React, { Component } from 'react';

const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";
const query_url = "https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=";

export { getMoviesFromApi, searchMovies };

function getMoviesFromApi() {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

function searchMovies(query) {
  const build_url = query_url + query
  console.log(build_url)
  return fetch(build_url)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson.results;
      })
      .catch((error) => {
        console.error(error);
      });
}
