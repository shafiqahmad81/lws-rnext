import Profile from "./profile";

const person = {
  name: "Shafiq",

  them: {
    fontSize: "50px",
    backgroundColor: "red",
  },
};

const style1 = {
  backgroundColor: "red",
};

const style2 = {
  backgroundColor: "green",
};

const color = "black";

export default function App() {
  return (
    <div style={color === "green" ? style1 : style2}>
      <h1>{person.name} This is my templeate</h1>
      <Profile />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, vero.
      </p>
    </div>
  );
}
