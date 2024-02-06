import Header from "../header";
import HeroSection from "../herosection";
import Ternary from "../ternary";

export default function section() {
  const name = "This is my Computer";
  const size = 45;
  const style = "Shafiq";

  return (
    <>
      <Header>
        <HeroSection name={name} size={size} style={style} />
        <Ternary />
      </Header>
    </>
  );
}
