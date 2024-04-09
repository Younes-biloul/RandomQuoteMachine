import { useState } from "react";
import "./App.css";

function App() {
  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      color: "#FF5733",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
      color: "#33FFB8",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      color: "#336BFF",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      color: "#FF33D1",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
      color: "#C433FF",
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      color: "#33FFA7",
    },
    {
      quote: "Your limitation—it's only your imagination.",
      author: "Unknown",
      color: "#33A7FF",
    },
    {
      quote:
        "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Unknown",
      color: "#A733FF",
    },
  ];
  // Generate a random index within the quotes array length
  let randomIndex = Math.floor(Math.random() * quotes.length);
  // Get the random object from the quotes array
  const [randomQuote, setRandomQuote] = useState(quotes[randomIndex]); ;


  const handleClick=()=>{
    randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }
  const customStyles = {
    "--primary": randomQuote.color,
  };
  return (
    <div className="container" style={customStyles}>
      <div className=" flex box">
        <div className="text-box" id="quote-box">
          <i className="fa fa-quote-left"></i>
          <span id="text">{randomQuote.quote}</span>
        </div>
        <p className="box-text" id="author">
          - {randomQuote.author}
        </p>
        <div className="box-buttons flex">
          <div className="left-buttons flex">
            <a href="" id="tweet-quote">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="" id="tumblr-quote">
              <i class="fa-brands fa-tumblr"></i>
            </a>
          </div>
          <div className="right">
            <button id="new-quote" onClick={handleClick}>
              New quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
