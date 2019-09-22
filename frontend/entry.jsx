import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {

  // preloaded status
  let preloadedState;
  preloadedState = {
    conversations: JSON.parse(localStorage.getItem('conversations') || "{}")
  }

  const store = configureStore(preloadedState);

  // need delete after deploy
  window.store = store;
  ReactDOM.render(<Root store = { store }/>, document.getElementById('root'));
});
