import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import { useSelector } from 'react-redux'
import './Movies.css';

function Movies() {

    const movie = useSelector(
        function(state) {
            return state;
        }
    )

    return (
        <ul className="movies">
            {movie.data.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            ))}
        </ul>
    );

}

export default Movies;