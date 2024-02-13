import Button from "./button";
import Search from "./search";
export default function App() {
  return (
    <>
      <div onClick={() => console.log("Play button")}>
        <Button onSmash={() => console.log("Play Movie")}>Play Movie</Button>
        <Button onSmash={() => console.log("Upload Image")}>
          Upload Image
        </Button>
      </div>
      <Search />
    </>
  );
}
