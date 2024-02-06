/* eslint-disable react/prop-types */
function Item({ name, packed }) {
  let Content = "";
  if (packed) {
    Content = name + "✔";
  } else {
    Content = name;
  }
  // if (packed) {
  //   return <li>{name + "✔" + s}</li>;
  // } else {
  //   return <li>{name}</li>;
  // }
  // return <li>{packed ? name + "✔" : name}</li>;
  return <li>{Content}</li>;
}
export default function Ternary() {
  return (
    <>
      <section>
        <ul>
          <Item packed={true} name="This is a menu" />
          <Item packed={true} name="Computer" />
          <Item packed={false} name="Monitor" />
        </ul>
      </section>
    </>
  );
}
