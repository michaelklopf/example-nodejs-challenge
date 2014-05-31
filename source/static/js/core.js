$(document).ready(function() {
  $.getJSON("/commits", function(data) {
    //console.log(data);
    for (var i = 0; i < data.length; i++) {
      var author = '<div>' + data[i].commit.author.name + '</div><br>';
      $('#content').append(author);

      var sha = new String(data[i].commit.tree.sha);
      addCommitShaToContent(sha);
    }
  });
});

var addCommitShaToContent = function(sha) {
  $('#content').append(getContentWithColorClass(sha));
};

var getContentWithColorClass = function(sha) {
  var colorClass = getCorrectColorClassForSha(sha);
  var commit = '<div class="' + colorClass + '">' + sha + '</div><br>';
  return commit;
};

var getCorrectColorClassForSha = function(sha) {
  if (lastCharIsNumber(sha)) {
    return 'lightBlue';
  } else {
    return 'darkBlue';
  }
};

var lastCharIsNumber = function(sha) {
  if (isNaN(parseInt(sha[sha.length-1]))) {
    return false;
  } else {
    return true;
  }
};
