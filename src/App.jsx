import { Profile } from "./components";

function App() {
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-2xl font-bold text-center">Amazing scientists</h1>
      <div className="flex gap-1 justify-center mt-2">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

export default App;
