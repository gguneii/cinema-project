import React from 'react';
import MainPage from './pages/MainPage/MainPage';
import ListItem from './components/Lists/ListItem';
import Header from './components/Header/Header';

import './App.css';
import './index.css';

import { Routes, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route path="" element={<MainPage />}> </Route>
          <Route path="/ListItem:id" element={<ListItem />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
