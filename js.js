$(document).ready(function() {
    $.ajaxSetup({ cache: false });
    
    $("#getQuote").on("click", function(){
       $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
         var qContent = a[0].content;
         qContent = qContent.substring(3,qContent.length - 5).trim(); 
          $("#quote-content").html(qContent);
          $("#author").html(a[0].title);
       });
    });
    
    $("#twitter").on("click", function(){
      var content = document.getElementById("quote-content").innerHTML;
      var author = document.getElementById("author").innerHTML;
      var newHref = "https://twitter.com/intent/tweet?text=" + "\"" + content +  "\" " + author + "&hashtags=quotes";
      $("#twitter").attr("href",newHref);
    });
    
  });
