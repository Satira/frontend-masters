import React from 'react';
import { render } from 'react-dom';
import Pet  from './Pet';

const App = () => {
  return React.createElement(
    "div",
    { id: "this-is-an-id", class: "this-is-a-class" },
    [
      React.createElement("h1", {}, "Adopt me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "labrador",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "cockateil",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "stray",
      }),
    ]
  );
};

render(React.createElement(App), document.querySelector("#root"));
