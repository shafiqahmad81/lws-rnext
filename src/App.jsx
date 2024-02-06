import { Abatar, Profile } from "./components";

function App() {
  const age = 30;
  const name = "Shafiq";
  const size = 45;
  return (
    <>
      <div>
        <Profile size={size}>
          <Abatar age={age} name={name} />
        </Profile>
      </div>
    </>
  );
}

export default App;
