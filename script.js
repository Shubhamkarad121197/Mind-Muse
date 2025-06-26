const quotes = {
  happy: [
    {
      sanskrit: "“सुखस्य मूलं धर्मः।”",
      english: "The root of happiness is righteousness."
    },
    {
      sanskrit: "“आनन्दः परमानन्दः।”",
      english: "Joy is the supreme bliss."
    },
    {
      sanskrit: "“प्रसन्नात्मा न शोचति।”",
      english: "The joyful soul does not grieve."
    }
  ],
  sad: [
    {
      sanskrit: "“दुःखं नित्यं न तिष्ठति।”",
      english: "Sorrow never stays forever."
    },
    {
      sanskrit: "“सर्वं दुःखं अनित्यम्।”",
      english: "All sorrow is temporary."
    },
    {
      sanskrit: "“कालः सर्वं सुलभं करिष्यति।”",
      english: "Time will heal everything."
    }
  ],
  Angry: [
    {
      sanskrit: "“क्रोधो हि शत्रुः शान्तिः सखा।”",
      english: "Anger is the enemy; peace is a friend."
    },
    {
      sanskrit: "“क्रोधात् भवति संमोहः।”",
      english: "From anger arises delusion."
    },
    {
      sanskrit: "“शमः परं सौख्यम्।”",
      english: "Calmness is the greatest comfort."
    }
  ],
  tired: [
    {
      sanskrit: "“विश्रामो हि कर्मणां फलम्।”",
      english: "Rest is the fruit of work."
    },
    {
      sanskrit: "“श्रमो न विनश्यति।”",
      english: "Effort never goes in vain."
    },
    {
      sanskrit: "“सर्वं विश्रान्त्या साध्यते।”",
      english: "Everything is achieved through rest."
    }
  ]
};


let mainContainer = document.getElementById("landingContainer");
let happyAudio=new Audio('assets/Namami-Shamishan.mp3');
let sadAudio=new Audio('assets/Hamari Adhuri Kahani - Arjit Singh(Pagalourld.in).mp3');
let tiredAudio=new Audio('assets/128-Jame Raho - Taare Zameen Par 128 Kbps.mp3');
let angryAudio=new Audio('assets/128-Aarambh - Gulaal 128 Kbps.mp3')

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
      

    `;
  mainContainer.append(exploreMoodSection);

  let happyBtn = exploreMoodSection.querySelector("#happyBtn");
  happyBtn.addEventListener("click", function () {
   exploreMoodSection.style.backgroundImage = "url('assets/mahadev.jpg')";
    exploreMoodSection.style.backgroundSize = "cover";         // Makes the image cover entire container
    exploreMoodSection.style.backgroundPosition = "center";    // Centers the image
    exploreMoodSection.style.backgroundRepeat = "no-repeat";   // Prevents tiling
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    happyAudio.play()
     tiredAudio.pause();
    sadAudio.pause();
    angryAudio.pause();
    generateQuoteBox("happy",exploreMoodSection);
  });

  let sadBtn = exploreMoodSection.querySelector("#sadBtn");
  sadBtn.addEventListener("click", function () {
   exploreMoodSection.style.backgroundImage = "url('assets/sad-contemplative-person-near-lake.jpg')";
    exploreMoodSection.style.backgroundSize = "cover";         // Makes the image cover entire container
    exploreMoodSection.style.backgroundPosition = "center";    // Centers the image
    exploreMoodSection.style.backgroundRepeat = "no-repeat";   // Prevents tiling
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("sad",exploreMoodSection);
     tiredAudio.pause();
    happyAudio.pause()
    sadAudio.play();
    angryAudio.pause();
  });

  let angryBtn = exploreMoodSection.querySelector("#angryBtn");
  angryBtn.addEventListener("click", function () {
  
    exploreMoodSection.style.backgroundImage = "url('assets/piyushMishra.jpeg')";
    exploreMoodSection.style.backgroundSize = "cover";         // Makes the image cover entire container
    exploreMoodSection.style.backgroundPosition = "center";    // Centers the image
    exploreMoodSection.style.backgroundRepeat = "no-repeat";   // Prevents tiling
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("Angry",exploreMoodSection);
     tiredAudio.pause();
    happyAudio.pause()
    sadAudio.pause();
    angryAudio.play();
  });

  let tiredBtn = exploreMoodSection.querySelector("#tiredBtn");
  tiredBtn.addEventListener("click", function () {
   exploreMoodSection.style.backgroundImage = "url('assets/taare zameen par- painting.jpeg')";
    exploreMoodSection.style.backgroundSize = "cover";        
    exploreMoodSection.style.backgroundPosition = "center";    
    exploreMoodSection.style.backgroundRepeat = "no-repeat";   
    exploreMoodSection.style.minHeight = "100vh";
    exploreMoodSection.style.padding = "50px 20px";
    exploreMoodSection.style.textAlign = "center";

    generateQuoteBox("tired",exploreMoodSection);
    tiredAudio.play();
    happyAudio.pause()
    sadAudio.pause();
    angryAudio.pause();
  });


 
}

function generateQuoteBox(mood, container) {
  let existingBox = container.querySelector("#quoteBox");
  if (existingBox) {
    existingBox.remove();
  }

  let quoteBox = document.createElement("div");
  quoteBox.id = "quoteBox";

  
  let moodQuotes = quotes[mood];
  let randomIndex = Math.floor(Math.random() * moodQuotes.length);
  let { sanskrit, english } = moodQuotes[randomIndex];

  let sanskritQuote = document.createElement("p");
  sanskritQuote.textContent = sanskrit;

  let englishMeaning = document.createElement("p");
  englishMeaning.textContent = english;


  quoteBox.style.marginTop = "30px";
  quoteBox.style.textAlign = "center";
  quoteBox.style.padding = "30px";
  quoteBox.style.maxWidth = "600px";
  quoteBox.style.marginLeft = "auto";
  quoteBox.style.marginRight = "auto";
  quoteBox.style.background = "rgba(255, 255, 255, 0.85)";
  quoteBox.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.2)";
  quoteBox.style.borderRadius = "20px";
  quoteBox.style.backdropFilter = "blur(8px)";

  sanskritQuote.style.fontSize = "1.6rem";
  sanskritQuote.style.fontStyle = "italic";
  sanskritQuote.style.fontWeight = "bold";
  sanskritQuote.style.color = "#222";

  englishMeaning.style.fontSize = "1.1rem";
  englishMeaning.style.color = "#555";
  englishMeaning.style.marginTop = "15px";

  quoteBox.appendChild(sanskritQuote);
  quoteBox.appendChild(englishMeaning);

  container.appendChild(quoteBox);
}



