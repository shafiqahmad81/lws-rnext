export default function Button({ onPlayMovi }) {
  function handleClick() {
    alert(onPlayMovi);
  }
  return <button onClick={handleClick}></button>;
}
