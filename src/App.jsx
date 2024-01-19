// eslint-disable-next-line react/prop-types
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
function App() {
  return (
    <>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </>
  );
}

export default App;
