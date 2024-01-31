export default function Profile({ person, size }) {
  return (
    <div>
      <h1 style={{ fontSize: "50px", color: "green" }}>{person.name}</h1>
      <p>{person.imageId}</p>
      <div>{size}</div>
    </div>
  );
}
