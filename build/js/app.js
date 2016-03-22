(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var apiKey = 'ae269b4f4a8d0f09b338fc7e9753fce06f243e1c'; //from .env

exports.getUserName = function(username) {
  $.get('https://api.github.com/users/' +username+ '?access_token=' +apiKey).then(function(response) {
    console.log(response);
    userHandle = response.login;
    $('#userResult').html('<div id="nameOfUser"><h3>' +username+ '</h3></div>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('#userResult').html('<div id="nameOfUser"><h3>' + "That username does not exist." + '</h3></div>');
  });
};


exports.getRepos = function(user) {
  $.get('https://api.github.com/users/' +user+ '/repos?access_token=' +apiKey).then(function(response) {
    console.log(response);
    response.forEach(function(repository, i) {
      $('#userRepos').append('<li class="repoName"' + i + "'>" + "<a href='" + repository.html_url + "'target='_blank'>" + repository.name + '</a></li>');
    }).fail(function(error){
      console.log(error.responseJSON.message);
      $('#userRepos').append('li class="repoName"' + "This is either not a user, or they have no repos." + '</li>');
    });
  });
};

},{}],2:[function(require,module,exports){
var getUserName = require('./../js/gitGle.js').getUserName;
var getRepos = require('./../js/gitGle.js').getRepos;

$(document).ready(function() {
  $('#userSearch').submit(function(event) {
    event.preventDefault();

    var user = $('input#gitUser').val();

    getUserName(user);
    getRepos(user);
  });
});

},{"./../js/gitGle.js":1}]},{},[2]);
