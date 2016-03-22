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
