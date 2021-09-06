import React from "react";
import "./styles.css";
import { useState } from "react";

const toolsDB = {
  LearnCSS1: [
    {
      name: "Flexbox froggy ",
      description:
        "This game is about Flexbox and it covers flex properties like align-items, justify-content, align-content, flex-direction, align-self, flex-wrap, flex-flow and order in 24 different levels. Yeah, last level is bit challenging",
      url: "https://colorhunt.co/",
      rating: "5/5"
    },

    {
      name: "Flexbox Zombies ",
      description:
        "Here we use Flexbox to position the hero’s crossbow and hit the zombies and survive along the game. Each section unravels part of the plot, gives you expertise over a new flexbox concept, and presents zombie survival challenges that force you to solidify your new skills like your life depends on it.",
      url: "https://www.canva.com/colors/color-palette-generator/",
      rating: "4/5"
    },

    {
      name: "Flexbox defense ",
      description:
        "Flexbox defense is based on the classic tower defence games, but to place our items we write CSS instructions. We use the justify-content property on the main container to move the single towers into effective positions. !!",
      url: "https://coolors.co/",
      rating: "5/5"
    }
  ],

  Websites: [
    {
      name: "Grid Garden ",
      description:
        "Grid Garden game features 28 levels, starting with easy difficulty and gradually increasing it. Use the various grid properties to water and grow your carrot garden. Grid Garden has a code editor and visual area so you instantly see your result. ",
      url: "https://www.geeksforgeeks.org/",
      rating: "5/5"
    },

    {
      name: "CSS Battle  ",
      description:
        "CSS Battle is more of an online challenge than an actual CSS practice game, the objective is to write HTML and CSS code to replicate the given target image in the least code possible. This game is constantly updated with new challenges. It has a global ranking system and the ability to re-play each challenge so you can improve your own results.",
      url: "https://www.w3schools.com/",
      rating: "5/5"
    },

    {
      name: "CSS Diner  ",
      description:
        "The CSS Diner webapp is really fun and genuinely educational for developers of all skill levels. You’ll go through 26 different levels of increasing difficulty. The first few levels teach core fundamentals like element selectors and class selectors. In the later levels you’re working with advanced concepts like :only-of-type and :not(x).",
      url: "https://www.tutorialspoint.com/index.htm",
      rating: "5/5"
    },

    {
      name: "CodePip ",
      description:
        "We already checked Grid Garden and Flexbox Froggy, you’ve seen some examples of CodePip’s work already. Those are just the two free games they offer. If you sign up for a pro account on their site, they also have games that range from general CSS review to JavaScript",
      url: "https://stackoverflow.com/",
      rating: "5/5"
    }
  ],

  Extensions: [
    {
      name: "Flexbox Zombies ",
      description:
        "Here we use Flexbox to position the hero’s crossbow and hit the zombies and survive along the game. Each section unravels part of the plot, gives you expertise over a new flexbox concept, and presents zombie survival challenges that force you to solidify your new skills like your life depends on it.",
      url: "https://eyedropper.org/",
      rating: "5/5"
    },

    {
      name: "Flexbox defense ",
      description:
        "Flexbox defense is based on the classic tower defence games, but to place our items we write CSS instructions. We use the justify-content property on the main container to move the single towers into effective positions. !!",
      url: "https://workona.com/",
      rating: "5/5"
    },

    {
      name: "CodePip ",
      description:
        "We already checked Grid Garden and Flexbox Froggy, you’ve seen some examples of CodePip’s work already. Those are just the two free games they offer. If you sign up for a pro account on their site, they also have games that range from general CSS review to JavaScript",
      url: "https://www.naturalreaders.com/online/",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Extensions");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Tools for developers </h1>
      <p>Here are some Tools that i found to be useful</p>

      <div>
        {Object.keys(toolsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {toolsDB[selectedGenre].map((tools) => (
            <li
              key={tools.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "90%",
                margin: "1rem 1rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "Larger" }}>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={tools.url}
                >
                  <span style={{ fontSize: "larger" }}>{tools.name}</span>
                </a>
              </div>
              <div style={{ fontWeight: "lighter" }}> {tools.description} </div>
              <div style={{ fontWeight: "lighter" }}> {tools.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
