var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute, HashHistory} = require('react-router');

var TodoApp = require('TodoApp');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles')


let hashHistory = Router.hashHistory;


ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
