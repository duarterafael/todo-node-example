// External Styles


// External libs
require('angular')
require('angular-resource')
require('angular-route')

// Project Styles
require('./app/app.scss')

// Project libs
require('./app/app.js')
require('./app/features/todo/todoController')
require('./app/features/todo/todoService')


/*
var cute = require('./images/rickandmorty.jpg');

var rootEl = document.getElementById('root');
var imageEl = document.createElement('img');
imageEl.src = cute;
rootEl.appendChild(imageEl);
*/