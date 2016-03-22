var apiKey = require('./../.env').apiKey; //from .env

exports.getUserName = function() {
  $.get('https://api.github.com/users/' +user+ '?access_token=' +apiKey).then(function(response) {
    console.log(response);

    userHandle = response.login;
    $('#userResult').html('<div id="nameOfUser"><h3>' +user+ '</h3></div>');
  }).fail(function(error){
  console.log(error.responseJSON.message);
};


exports.getRepos = function() {
  $.get('https://api.github.com/users/' +user+ '/repos?access_token=' +apiKey).then(function(response) {
    console.log(response);
    response.forEach(function(repository, i) {
      $('#userRepos').append('<li class="repoName"' + i + "'>" + "<a href='" + repository.html_url + "'target='_blank'>" + repository.name + '</a></li>');
    }).fail(function(error){
    console.log(error.responseJSON.message);
    });
  });
};
