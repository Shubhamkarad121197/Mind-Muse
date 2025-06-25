let mainContainer = document.getElementById("landingContainer");

document.addEventListener("DOMContentLoaded", function () {
  initialize();
});

function initialize() {
  let heroSection = document.createElement("section");
  heroSection.classList = "hero";
  heroSection.innerHTML = `
  <h1>Your Mood. Your Music. Your Moment.</h1>
  <p>Discover uplifting quotes and mood-matching music — all in one click.</p>
  <button id='exploreMood'>🎧 Start Exploring Your Mood</button>`;
  mainContainer.append(heroSection);

  let exploreMoodBtn = document.getElementById("exploreMood");
  exploreMoodBtn.addEventListener("click", function () {
    heroSection.style.display = "none";
    exploreMoodPage();
  });
}

function exploreMoodPage() {
  let exploreMoodSection = document.createElement("section");



  exploreMoodSection.classList = "exploreMood";

  exploreMoodSection.innerHTML = `<h1>Explore Your Mood</h1>
    <h2>How are you feeling today?</h2>
      <button id='happyBtn'>😊 Happy</button>
      <button id='sadBtn'>😢 Sad</button>
      <button id='angryBtn'> 😤 Angry</button>
      <button id='tiredBtn'> 😤 Tired</button>
      <button id='BackBtn'>Back</button>

    `;
  mainContainer.append(exploreMoodSection);

  let happyBtn = exploreMoodSection.querySelector("#happyBtn");
  happyBtn.addEventListener("click", function () {
    exploreMoodSection.style.background = "lightyellow";
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("happy",exploreMoodSection);
  });

  let sadBtn = exploreMoodSection.querySelector("#sadBtn");
  sadBtn.addEventListener("click", function () {
    exploreMoodSection.style.background = "#b3d9ff";
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("sad",exploreMoodSection);
  });

  let angryBtn = exploreMoodSection.querySelector("#angryBtn");
  angryBtn.addEventListener("click", function () {
    exploreMoodSection.style.background = "#d63031";
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("Angry",exploreMoodSection);
  });

  let tiredBtn = exploreMoodSection.querySelector("#tiredBtn");
  tiredBtn.addEventListener("click", function () {
    exploreMoodSection.style.background = "#dfe6e9";
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("tired",exploreMoodSection);
  });

  let backBtn= exploreMoodSection.querySelector("#backBtn");
  backBtn.addEventListener("click", function () {
    exploreMoodSection.style.background = "#dfe6e9";
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    initialize()

   
  });
 
}

function generateQuoteBox(mood, container) {
  
  let existingBox = container.querySelector("#quoteBox");
  if (existingBox) {
    existingBox.remove();
  }

  
  let quoteBox = document.createElement("div");
  quoteBox.id = "quoteBox";

  
  let sanskritQuote = document.createElement("p");
  let englishMeaning = document.createElement("p");

  
  if (mood === "happy") {
    sanskritQuote.textContent = "“सुखस्य मूलं धर्मः।”";
    englishMeaning.textContent = "The root of happiness is righteousness.";
  } else if (mood === "sad") {
    sanskritQuote.textContent = "“दुःखं नित्यं न तिष्ठति।”";
    englishMeaning.textContent = "Sorrow never stays forever.";
  } else if (mood === "Angry") {
    sanskritQuote.textContent = "“क्रोधो हि शत्रुः शान्तिः सखा।”";
    englishMeaning.textContent = "Anger is the enemy; peace is a friend.";
  } else if (mood === "tired") {
    sanskritQuote.textContent = "“विश्रामो हि कर्मणां फलम्।”";
    englishMeaning.textContent = "Rest is the fruit of work.";
  }

  
  quoteBox.style.marginTop = "30px";
  quoteBox.style.textAlign = "center";

  sanskritQuote.style.fontSize = "1.4rem";
  sanskritQuote.style.fontStyle = "italic";
  sanskritQuote.style.color = "#333";

  englishMeaning.style.fontSize = "1rem";
  englishMeaning.style.color = "#666";
  englishMeaning.style.marginTop = "10px";

  quoteBox.appendChild(sanskritQuote);
  quoteBox.appendChild(englishMeaning);


  container.appendChild(quoteBox);
}

