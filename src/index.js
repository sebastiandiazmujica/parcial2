import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {IntlProvider} from 'react-intl';
import Peliculas from './componentes/peliculas';

// import messages_de from "./translations/de.json";
// import messages_en from "./translations/en.json";

// const messages = {
//     'de': messages_de,
//     'en': messages_en
// };

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language}>
    <Peliculas locale={language}></Peliculas>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
