import React, { Component } from 'react';

const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

export { getMoviesFromApi };

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
