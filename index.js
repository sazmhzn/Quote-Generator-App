const quotes = [
  {
    quote:
      "Spread love 💖 everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    category: "general",
  },
  {
    quote:
      "When you reach the end of your rope 🪢, tie a knot in it and hang on.",
    author: "Franklin D. Roosevelt",
    category: "general",
  },
  {
    quote:
      "Always remember that you are absolutely unique 😇. Just like everyone else.",
    author: "Margaret Mead",
    category: "general",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams. 😊",
    author: "Eleanor Roosevelt",
    category: "general",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
    category: "general",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart 💓.",
    author: "Helen Keller",
    category: "general",
  },
  {
    quote:
      "It is during our darkest 🌑 moments that we must focus to see the light ☀️.",
    author: "Aristotle",
    category: "general",
  },
  {
    quote: "Whoever is happy 😊 will make others happy too.",
    author: "Anne Frank",
    category: "general",
  },
  {
    quote:
      "A wise woman never yields by appointment. It should always be an unforeseen happiness.",
    author: "Stendhal",
    category: "happiness",
  },
  {
    quote:
      "I've done an informal, anecdotal survey about marriage, and I've found no evidence that it brings happiness.",
    author: "Mary McCormack",
    category: "happiness",
  },
  {
    quote: "Happiness depends upon ourselves.",
    author: "Aristotle",
    category: "happiness",
  },
  {
    quote:
      "The only thing that could spoil a day was people. People were always the limiters of happiness except for the very few that were as good as spring itself.",
    author: "Ernest Hemingway",
    category: "happiness",
  },
  {
    quote:
      "Happiness does not come from doing easy work but from the afterglow of satisfaction that comes after the achievement of a difficult task that demanded our best.",
    author: "Theodore Isaac Rubin",
    category: "happiness",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
    category: "life",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    category: "life",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    category: "life",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
    category: "life",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
    category: "life",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
    category: "life",
  },
  {
    quote:
      "If life were predictable it would cease to be life and be without flavor.",
    author: "Eleanor Roosevelt",
    category: "life",
  },
  {
    quote:
      "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
    category: "life",
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
    category: "life",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "life",
  },
  {
    quote:
      "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa",
    category: "life",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
    category: "life",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "life",
  },
  {
    quote:
      "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "Henry David Thoreau",
    category: "life",
  },
  {
    quote: "Love is the strongest force the world possesses.",
    author: "Mahatma Gandhi",
    category: "life",
  },
  {
    quote: "Life is too short for long-term grudges.",
    author: "Elon Musk",
    category: "life",
  },
  {
    quote:
      "Life consists not in holding good cards but in playing those you hold well.",
    author: "Josh Billings",
    category: "life",
  },
  {
    quote:
      "Life is a mirror and will reflect back to the thinker what he thinks into it.",
    author: "Ernest Holmes",
    category: "life",
  },
  {
    quote: "To live is to think.",
    author: "Marcus Tullius Cicero",
    category: "life",
  },
  {
    quote: "It is not length of life, but depth of life.",
    author: "Ralph Waldo Emerson",
    category: "life",
  },
  {
    quote:
      "There he goes. One of god's own prototypes. Some sort of high-powered mutant never considered for mass production. Too weird to live, and too rare to die.",
    author: "Hunter S. Thompson",
    category: "life",
  },
  {
    quote: "If you want to be Strong Learn to live Alone.",
    author: "Rowan Atkinson",
    category: "life",
  },
  {
    quote:
      "Do not set out in life to be an interesting person. Set out to be an interested person.",
    author: "Gardner as quoted in Collins in 1997",
    category: "life",
  },
  {
    quote: "Gain all you can, save all you can, and give all you can.",
    author: "John Wesley",
    category: "life",
  },
];

const categoryColors = {
  general: "#3f84e5",
  happiness: "#f39c12",
  life: "#2ecc71",
};

const category = ["life", "general", "happiness"];

let currentIndex = 0;
let currentCategory = "general";

const quoteText = document.querySelector(
  ".quote-generator__quote-block__quote"
);
const authorText = document.querySelector(
  ".quote-generator__quote-block__author"
);
const categoryText = document.querySelector(
  ".quote-generator__quote-block__category"
);

// Cache buttons and other elements too
const nextButton = document.querySelector(".quote-generator__button--next");
const prevButton = document.querySelector(".quote-generator__button--prev");
const randomButton = document.querySelector(".quote-generator__button--random");

const fontMinusButton = document.querySelector("#font-minus");
const fontPlusButton = document.querySelector("#font-plus");

function getFilteredQuotes(categorys) {
  return quotes.filter((quote) => {
    return quote.category === categorys;
  });
}

// Function to display a quote
function displayQuote(index) {
  const filteredQuotes = getFilteredQuotes(currentCategory); // Filter quotes by category
  if (filteredQuotes.length > 0) {
    quoteText.textContent = `"${filteredQuotes[index].quote}"`;
    authorText.textContent = `- ${filteredQuotes[index].author}`;
    categoryText.textContent = `- ${filteredQuotes[index].category}`;
  }
}

nextButton.addEventListener("click", () => {
  const filteredQuotes = getFilteredQuotes(currentCategory);
  currentIndex = (currentIndex + 1) % filteredQuotes.length;
  displayQuote(currentIndex);
});

prevButton.addEventListener("click", () => {
  const filteredQuotes = getFilteredQuotes(currentCategory);
  currentIndex =
    (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  displayQuote(currentIndex);
});

randomButton.addEventListener("click", () => {
  const filteredQuotes = getFilteredQuotes(currentCategory);
  currentIndex = Math.floor(Math.random() * filteredQuotes.length);
  displayQuote(currentIndex);
});

// Function to get the selected category
function getSelectedCategory() {
  const categoryInputs = document.querySelectorAll(
    ".quote-generator__category-select__input"
  );

  categoryInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      currentCategory = event.target.value;
      document.documentElement.style.setProperty(
        "--primary",
        categoryColors[currentCategory] || "#000"
      );
      displayQuote(currentIndex);
    });
  });
}

// Call the function to start listening for category changes
getSelectedCategory();

document.querySelector("#light-mode").addEventListener("click", function (e) {
  const elements = document.querySelectorAll(
    ".theme-dark-mode, .theme-light-mode"
  );
  elements.forEach((item) => {
    if (e.target.checked) {
      item.classList.add("theme-dark-mode");
      item.classList.remove("theme-light-mode");
    } else {
      item.classList.add("theme-light-mode");
      item.classList.remove("theme-dark-mode");
    }
  });
});

displayQuote(currentIndex);

document.querySelector("#font-minus").addEventListener("click", function () {
  let currentFontSize = window.getComputedStyle(quoteText).fontSize;
  currentFontSize = parseFloat(currentFontSize);

  if (currentFontSize > 10) {
    quoteText.style.fontSize = `${currentFontSize - 1}px`;
    authorText.style.fontSize = `${currentFontSize - 1}px`;
  }
});

document.querySelector("#font-plus").addEventListener("click", function () {
  let currentFontSize = window.getComputedStyle(quoteText).fontSize;
  currentFontSize = parseFloat(currentFontSize);

  if (currentFontSize > 1 && currentFontSize < 32) {
    quoteText.style.fontSize = `${currentFontSize + 1}px`;
    authorText.style.fontSize = `${currentFontSize + 1}px`;
  }
});
