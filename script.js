let intSpan = document.querySelector("#dailyInt");
let totalInteractions =document.querySelector("#total-int");


//Pulling Info from WebAPI
function articleInfo() {
    //WebURL including APIKey
let input = $("#news-input").val()
let webUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ input +"&api-key=XdqYsMJQiUIzGOnjulFokGyATyRNJe2K"

// $.ajax( {
// url: webUrl,
// method: "GET",
// }).then(function (response) {
   // let results = web.response.docs[0].abstract;
   //  console.log(results)
// //Generating random number for articles
//    const randomArticle = results[Math.floor(Math.random() * results.length)];
//    console.log(response)  
//    //console.log("Title: " + randomArticle.title + " Abstract:" + randomArticle.abstract + " Url: " + randomArticle.url)
//    //Title of article
// let title = randomArticle.title;
//    $("#news-titleHtml").text(title)
// // Abstract from article
// let abstract = randomArticle.abstract;
// $("#news-abstractHtml").text(abstract)
// //Url for article
// let url = randomArticle.url
// $("#news-urlHtml").attr({"href": url, "target": "_blank"})
// $("#news-urlHtml").text("Click for full article")
// //Button click
// })}


$.ajax( {
   url: webUrl,
   method: "GET", 
}).then(function (web) {
   console.log(web)

// Generate random number 
let i = [Math.floor(Math.random() * 10)]

//Headline
   let title = web.response.docs[i].headline.main;
  $("#news-titleHtml").text(title)
//Abstract 
  let abstract = web.response.docs[i].abstract;
  $("#news-abstractHtml").text(abstract)

//Url
 let url = web.response.docs[i].web_url
$("#news-urlHtml").attr({"href": url, "target": "_blank"})
$("#news-urlHtml").text("Click for full article")


  

 console.log(results  + "Resultss")

})
}
$("#news-btn").on("click", articleInfo)

//Joke Api

// Creating an AJAX call for the joke.
function jokesAPI() {
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
      let setup = (response.body[0].setup);
      let punchline = (response.body[0].punchline);
      $("#joke-setup").text(setup);
      $("#joke-punchline").text(punchline);
      console.log(setup); 
      console.log(punchline);   
   })

}

function convoCounter () {
   if (typeof(Storage) !== "undefined"){
      if (localStorage.dailyinteractions) {
         localStorage.dailyinteractions = Number(localStorage.dailyinteractions)+1;
      } else {
         localStorage.dailyinteractions = 1;
      }
      $("#dailyInt").text(localStorage.dailyinteractions);
   } else {
      $("#dailyInt").text("Browser does not support storage");
   }
}

$("#advice-btn").on("click", generateRandomTip)

let tipsArray = ["It's okay to take breaks from people.", "If you're worried about getting stuck in social settings, set an alarm that matches your ringtone. Pretend you've got a call and dip.", "There's nothing wrong with ghosting.", "Videogames are a viable alternative to face-to-face interactions", "When someone calls you, text back: 'In a meeting'", "Bring a buddy and come up with code words.", "No is an acceptable response when people ask you things.", "You're dope. Don't foget that.", "Add some extroverts to your squad.", "Afraid of rejection or embarassment? Remember that ice cream exists."]

function generateRandomTip() {
   for (let i = 0; i < 1; i++) {
     let randomTipNum = Math.floor(Math.random() * tipsArray.length)
     let randomTipText = tipsArray[randomTipNum]
     console.log("Hello", randomTipNum)
     console.log(randomTipText)

     $("#daily-tip-array").text(randomTipText)

   }
 }

// Get the item from local storage and update the text of the span
function displayInteractions() {
   $("#dailyInt").text(localStorage.getItem("dailyinteractions"))
}

displayInteractions()

// Button to submit a human interaction 
$("#submitInt").on("click", function (){
   displayInteractions();
   convoCounter()
})

$("#joke-btn").on("click", jokesAPI);
 
