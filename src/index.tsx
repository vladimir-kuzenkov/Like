import * as React from 'react';
import { render } from 'react-dom';
import './global.css';


const renderApp = () => {
  render(
    <span>Hi Like</span>,
    document.getElementById('root'),
  );
};

renderApp();
