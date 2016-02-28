/** @jsx React.DOM */
'use strict'
var React = require('react')
var ReactDOM = require('react-dom')
var Hello = require('./Hello')

document.addEventListener("DOMContentLoaded", function(event) {
  ReactDOM.render(<Hello />, document.getElementById('react'));
});
