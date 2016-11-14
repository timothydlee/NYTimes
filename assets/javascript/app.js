var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'sort': "newest"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

var searchTerm = $('#search-term').val().trim();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";