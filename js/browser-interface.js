var getUserName = require('./../js/gitGle.js');
var getRepos = require('./../js/gitGle.js');

$(document).ready(function() {
  $('#userSearch').submit(function(event) {
    event.preventDefault();
    var user = $('#gitUser').val();
    getUserName();
    getRepos();
  });
});
