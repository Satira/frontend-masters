// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed),
//   ]);
// }

// this is calles Destructuring
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
