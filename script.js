
 
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

const settings = {
   "async": true,
   "crossDomain": true,
   "url": "https://dad-jokes.p.rapidapi.com/random/joke",
   "method": "GET",
   "headers": {
      "x-rapidapi-key": "dc7e6ef494msha69f3a48f05b80dp1609cfjsna8c047a89521",
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
   }
};
$.ajax(settings).done(function (response) {
   console.log(response);
   let setup = $("<p>").text(response.body[0].setup);
   let punchline = $("<p>").text(response.body[0].punchline);
   $("#jokes-result").append(setup);
   $("#jokes-result").append(punchline);
   console.log(setup); 
   console.log(punchline);   
})


 

 //console.log(response);
 //stringDadJoke = JSON.stringify(response);
 //console.log(stringDadJoke);
 //let jokeSetup = response.Setup
 //var setupDiv = $("<div class='joke'>");
 //jokeDiv.append(jokeOne);
 //var jokeOne = $("<p>").text("Here's your joke:" + jokeReponse);