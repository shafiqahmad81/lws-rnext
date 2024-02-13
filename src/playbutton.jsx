export default function PlayButton({ move }) {
  function handlePlayClick() {
    alert("this");
  }
  return <button onClick={handlePlayClick}>Play {move} </button>;
}
