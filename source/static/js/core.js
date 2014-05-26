$(document).ready(function() {
  $.getJSON("/commits", function(data) {
    for (var i = 0; i < data.length; i++) {
      var author = '<div>' + data[i].commit.author.name + '</div><br>';
      $('#content').append(author);
      var commit = '<div>' + data[i].commit.tree.sha + '</div><br>';
      $('#content').append(commit);
    }
  });
});
