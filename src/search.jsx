export default function Search() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
