import React, { Component } from 'react';

const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page=1";
const query_url = "https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1&include_adult=false&query=";

const url_paginate = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page=";

const top_rated_url = "https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1";

const popular_url = "https://api.themoviedb.org/3/movie/popular?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&language=en-US&page=1";

export { getMoviesFromApi, searchMovies, getMoreMoviesFromApi, getTopRatedFromApi, getPopularFromApi };


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

function getTopRatedFromApi() {
   return fetch(top_rated_url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });

}

function getMoreMoviesFromApi(page) {
  return fetch(url_paginate + page)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

function searchMovies(query) {
  if(query) {
    var build_url = query_url + query
  } else {
    var build_url = url
  }
  return fetch(build_url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });
}

function getPopularFromApi() {
  return fetch(popular_url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    })
    .catch((error) => {
      console.error(error);
    });
}


