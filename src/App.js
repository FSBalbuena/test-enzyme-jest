import React from 'react';
import './App.css';
import Header from './components/header/index';
import Headline from './components/headline/index';

function App() {
  return (
    <div >
    <Header/>
    <Headline title="Title" subtitle="Aca estan los Posteos"/>
    </div>
  );
}

export default App;
