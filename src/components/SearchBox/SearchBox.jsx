import React, { Component, useEffect, useState } from 'react';
import './SearchBox.css';
import { useDispatch, useSelector } from 'react-redux';

function SearchBox() {
    
    const input = useSelector(
        function(state) {
            return state.inputValue;
        }
    )

    useEffect(
        function(){

        },[]
    )

    const dis = useDispatch();
    let searchLineChangeHandler = (e) => {
        dis({
            type: "input_change",
            value: e.target.value
        })
    }

    let searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        
        async function fetchData() {
            let response = await fetch(`http://www.omdbapi.com/?s=${input}&apikey=9ad2bb5d&`)
            let data = await response.json();

            if(data.Response === "True"){
                dis({
                    type: 'submit_form',
                    dataFromApi: data.Search
                })
            } 
            else {
                dis({
                    type: "reset",
                })
            }
        }

        fetchData();
    }


    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={input}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    // disabled={!inputValue}
                >
                    Искать
                </button>
            </form>
        </div>
    );

}

export default SearchBox;


