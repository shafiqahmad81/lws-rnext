export default function App() {
  return (
    <>
      <form
        onSubmit={(e) => {
          console.dir(e);
          e.preventDefault();
        }}
      >
        <input className=" bg-gray-300" />
        <button>Send</button>
      </form>
    </>
  );
}
