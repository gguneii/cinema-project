import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Favorites.css';

function Favorites() {

    const dataFromStore = useSelector(
        function(state) {
            return state;
        }
    )

    console.log(dataFromStore)

    const dis = useDispatch();

    function ItemDeleteHandler(imdbID) {

        let indexOfElement;

        dataFromStore.favoriteList.filter(function(currentValue, index){
            if(currentValue.imdbID === imdbID){
                indexOfElement = index;
            }
        })
        
        dis({
            type: "delete_element",
            index: indexOfElement
        })
    }

    const listOfFavoritesName = (e) => {
        dis({
            type: "favourites_list_name_value",
            value: e.target.value
        })
    }

    const createLinkOfFavorites = () => {

        if(dataFromStore.favoritesListName !== ""){
            fetch(`https://acb-api.algoritmika.org/api/movies/list`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: dataFromStore.favoritesListName,
                movies: dataFromStore.favoriteList
            })
        })
        .then((response) => {return response.json()})
        .then((data => {
            dis({
                type: "create_list",
                payload: {
                    title: data.title,
                    id: data.id
                }
            })
        }))
        }
    }

    return (
        <div className="favorites">
            <div className='favorites_group'>
                <input className='favorites_input' type="text" onChange={listOfFavoritesName} value={dataFromStore.favoritesListName} />
                <button onClick={createLinkOfFavorites} className="favorites_btn">Get Links</button>
            </div>

            <br/><br/>
            <div className='addElementsNum'>
                <span>Əlavə edilmiş elementlərin sayı :</span> {dataFromStore.favoriteList.length} 
            </div>
             <ul className="favorites__list">
                {dataFromStore.favoriteList.map((item, index) => {
                    return <li className='list-item' key={index}>{item.Title} ({item.Year})
                        <button type="button" onClick={() =>ItemDeleteHandler(item.imdbID)} className="favorites__delete">x</button>
                    </li>
                })}
            </ul>
        </div>
    );
}


export default Favorites;