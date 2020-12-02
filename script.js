//Variables for grabbing HTML IDS
let intSpan = document.querySelector("#dailyInt");
let totalInteractions = document.querySelector("#total-int");

//Pulling Info from WebAPI
function articleInfo() {
  //Value of what is being input into box
  let input = $("#news-input").val();
  //WebURL including APIKey
  let webUrl =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    input +
    "&api-key=XdqYsMJQiUIzGOnjulFokGyATyRNJe2K";
  //Ajax Call
  $.ajax({
    url: webUrl,
    method: "GET",
  }).then(function (web) {
    console.log(web);
    // Generate random number
    let i = [Math.floor(Math.random() * 10)];
    //Headline/Title
    let title = web.response.docs[i].headline.main;
    $("#news-titleHtml").text(title);
    //Abstract
    let abstract = web.response.docs[i].abstract;
    $("#news-abstractHtml").text(abstract);
    //Url
    let url = web.response.docs[i].web_url;
    $("#news-urlHtml").attr({ href: url, target: "_blank" });
    $("#news-urlHtml").text("Click for full article");
  });
  let newsurlHtmlEl = document.getElementById("news-urlHtml")
  newsurlHtmlEl.classList.remove("hideButton");
  newsurlHtmlEl.classList.add("showButton");
  let dailyNewsResultEl = document.getElementById("daily-news-result")
  dailyNewsResultEl.classList.remove("hideSection")
  dailyNewsResultEl.classList.add("showSection")
}
$("#news-btn").on("click", articleInfo);

// Joke Api
function dadJokes() {
  $.getJSON("https://icanhazdadjoke.com/", function (dadJokeUrl) {
    //console.log("Here's some data on jokes: ", dadJokeUrl);
    let joke = dadJokeUrl.joke;
    $("#joke-result").text(joke);
  });
}
$("#joke-btn").on("click", dadJokes);



function convoCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.dailyinteractions) {
      localStorage.dailyinteractions =
        Number(localStorage.dailyinteractions) + 1;
    } else {
      localStorage.dailyinteractions = 1;
    }
    $("#dailyInt").text(localStorage.dailyinteractions);
  } else {
    $("#dailyInt").text("Browser does not support storage");
  }
}

$("#advice-btn").on("click", generateRandomTip);

let tipsArray = [
  "It's okay to take breaks from people.",
  "If you're worried about getting stuck in social settings, set an alarm that matches your ringtone. Pretend you've got a call and dip.",
  "There's nothing wrong with ghosting.",
  "Videogames are a viable alternative to face-to-face interactions",
  "When someone calls you, text back: 'In a meeting'",
  "Bring a buddy and come up with code words.",
  "No is an acceptable response when people ask you things.",
  "You're dope. Don't foget that.",
  "Add some extroverts to your squad.",
  "Afraid of rejection or embarassment? Remember that ice cream exists.",
];

function generateRandomTip() {
  for (let i = 0; i < 1; i++) {
    let randomTipNum = Math.floor(Math.random() * tipsArray.length);
    let randomTipText = tipsArray[randomTipNum];
    console.log("Hello", randomTipNum);
    console.log(randomTipText);

    $("#daily-tip-array").text(randomTipText);
  }
}

// Get the item from local storage and update the text of the span
function displayInteractions() {
  $("#dailyInt").text(localStorage.getItem("dailyinteractions"));
}

displayInteractions();

// Button to submit a human interaction
$("#submitInt").on("click", function () {
  displayInteractions();
  convoCounter();
});
