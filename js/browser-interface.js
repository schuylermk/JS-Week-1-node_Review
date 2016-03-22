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
