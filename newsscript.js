

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