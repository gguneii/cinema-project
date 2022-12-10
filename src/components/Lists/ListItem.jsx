import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ListItem() {

    const [state, changeState] = useState([]);

    let params = useParams();
    
    useEffect(function() {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${params.id}`)
        .then((response) => {return response.json()})
        .then((data) => {
            changeState(data.movies)
        })
    }, [])

    return(
        <div className='list_page'>{state.map((item, index) => {
            return <div className='list_page_item' key={index}>
                    <a href={`https://www.imdb.com/title/${item.imdbID}`} target="_blank" className="list_page_item_link">{item.Title}</a>
                </div>;
        })}</div>
    )
}