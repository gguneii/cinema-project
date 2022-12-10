import React, { Component } from 'react';
import './MainPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import Lists from '../../components/Lists/Lists';


class MainPage extends Component {

    render() { 
        return (
            <div className="main-page">
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites />
                        <Lists />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;