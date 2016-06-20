import $ from 'jquery'
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import React from 'react';
import App from 'components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App someProperty="Chris"/>, document.querySelector('#app'));
});
