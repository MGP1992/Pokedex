import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import pokedexImage from './pokedexwallpaper2.png';

ReactDOM.render(
  <React.StrictMode>
    <div id="container" className="relative h-full w-full overflow-hidden">
      <img src={pokedexImage} alt="Pokedex" className="max-w-7xl max-h-7xl h-full w-full object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        {/* Components rendered on top of the background image go here */}
        <App />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
