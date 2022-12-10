import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './List.css'


export default function Lists() {

    const {lists} = useSelector(
        function(state) {
            return state;
        }
    )

    return (
        <ul className='favorites_list'>
            {lists.map((item, index) => {
                return <li key={index} className="favorites_list_item">
                    <Link to={`ListItem${item.id}`}>{item.title}</Link>
                </li>
            })}
        </ul>
    )
}