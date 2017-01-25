$( document.body ).ready(function() {
    jQuery.getJSON('static/json/quotes.json', success=function(json) {
        var quote = parseInt(Math.random() * json.quotes.length);
        $('#anecdote').prepend(json.quotes[quote].phrase);
        $('#signature').text(json.quotes[quote].signature);
    })
});