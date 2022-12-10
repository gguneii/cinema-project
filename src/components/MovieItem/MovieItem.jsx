import React, { Component } from 'react';
import { useDispatch } from 'react-redux';

import './MovieItem.css';

function  MovieItem ({Title, Year, Poster, imdbID}){

    const dis = useDispatch();
    
    function addFavoriteListAddHanlder(e) {
        e.preventDefault();
            
        dis({
            type: "favorite_list_change",
            data: {Title, Year, Poster, imdbID}
        })
    }
        
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={addFavoriteListAddHanlder}>Добавить в список</button>
            </div>
        </article>
    );
        
}
 
export default MovieItem;