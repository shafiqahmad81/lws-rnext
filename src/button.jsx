/* eslint-disable no-undef */
function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }
  return <Button onSmash={handlePlayClick}>Play {movieName}!</Button>;
}
function UploadButton() {
  return <Button onSmash={() => alert("Uploading")}>Upload Image</Button>;
}
export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="This is a PlayButton" />
      <UploadButton />
    </div>
  );
}
