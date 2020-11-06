
 
//Pulling Info from WebAPI
function articleInfo() {
    //WebURL including APIKey
let webUrl = "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=XdqYsMJQiUIzGOnjulFokGyATyRNJe2K"

$.ajax( {
url: webUrl,
method: "GET",
}).then(function (response) {
 let results = response.results;
//Generating random number for articles
   const randomArticle = results[Math.floor(Math.random() * results.length)];
   console.log(response)  
   //console.log("Title: " + randomArticle.title + " Abstract:" + randomArticle.abstract + " Url: " + randomArticle.url)
   //Title of article
let title = randomArticle.title;
   $("#titleHtml").text(title)
// Abstract from article
let abstract = randomArticle.abstract;
$("#abstractHtml").text(abstract)
//Url for article
let url = randomArticle.url
$("#urlHtml").attr({"href": url, "target": "_blank"})
$("#urlHtml").text("Click for full article")
//Button click
})}
$("#btn").on("click", articleInfo)



//Joke Api

// Creating an AJAX call for the joke.

let queryURL = "https://sv443.net/jokeapi/v2/joke/Any";

$.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(joke) {
 console.log(joke); 
 //let jokeSetup = response.Setup
 //var setupDiv = $("<div class='joke'>");
 //jokeDiv.append(jokeOne);
 //var jokeOne = $("<p>").text("Here's your joke:" + jokeReponse);
 })
 