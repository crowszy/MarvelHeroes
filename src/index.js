import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import './style/style.scss';

// const marvelServices = new MarvelService();
// const id = 1010823;

// marvelServices.getCharacter(id).then(res => console.log(res));
// marvelServices.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

