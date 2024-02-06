/* eslint-disable react/prop-types */
function Item({ name, isPacked, size }) {
  let itemContent = "";
  if (isPacked) {
    itemContent = name + "✔" + size;
  } else {
    itemContent = name;
  }
  return <li className="item">{itemContent} </li>;

  // return (
  //   <li className="item">
  //     {name} {size} {isPacked && "✔"}
  //     return <li className="item">{name} ✔</li>;
  //   </li>
  // );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" size="10" />
        <Item isPacked={false} name="Helmet with a golden leaf" size="15" />
        <Item isPacked={true} name="Photo of Tam" size="30" />
      </ul>
    </section>
  );
}
