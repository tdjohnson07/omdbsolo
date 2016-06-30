$(document).ready(function() {
  function getMovie(url){
    $.get(url)
        .then(function(data) {
            console.log(data);
            console.log(data.Title);
            var title= data.Title;
            var released= data.Released;
            var poster=data.Poster;
            var plot=data.Plot;
            console.log(poster);
            $(".container").append("<h2>"+title+"</h2>");
            $(".container").append("<ul></ul");
            $(".container ul:last").append("<li>Released: "+released+"</li>");
            $(".container ul:last").append('<li><img src='+poster+'></img></li>');
            $(".container ul:last").append("<li>"+plot+"</li>");
        }).catch(function(){
          console.log("failure");
        });
    }
getMovie('http://www.omdbapi.com/?t=cool+runnings');
getMovie('http://www.omdbapi.com/?t=shawshank+redemption');
getMovie('http://www.omdbapi.com/?t=good+will+hunting');
});
