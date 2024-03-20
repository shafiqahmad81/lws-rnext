import Toolbar from "./button";

export default function App() {
  return (
    <>
      <Toolbar />
      <Tool
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />
    </>
  );
}

function Tool({ onPlayMovie, onUploadImage }) {
  return (
    <>
      <Button onSmash={onPlayMovie}>Play Movie</Button>
      <Button onSmash={onUploadImage}>Play Image</Button>
    </>
  );
}

function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
