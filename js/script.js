const inspirations = [
  { image: "./images/quote1.jpg" },
  { image: "./images/quote2.jpg" },
  { image: "./images/quote3.jpg" },
  { image: "./images/quote4.jpg" },
  { image: "./images/quote5.jpg" },
  { image: "./images/quote6.jpg" },
  { image: "./images/quote7.jpg" },
  { image: "./images/quote8.jpg" },
  { image: "./images/quote9.jpg" },
];
const button = document.getElementById("generate-btn");
const quoteText = document.getElementById("quote-text");
const quoteImage = document.getElementById("quote-image");
const card = document.querySelector(".card");
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * inspirations.length);
  const selected = inspirations[randomIndex];
  quoteText.textContent = selected.text;
  quoteImage.src = selected.image;
  card.classList.remove("hidden"); // ← makes it appear
});
