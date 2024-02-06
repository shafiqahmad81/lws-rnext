/* eslint-disable react/prop-types */
export default function HeroSection({ name, size, style }) {
  return (
    <>
      <div>
        <div>
          <h1>{name}</h1>
          <h2>{style}</h2>
          <div>{size}</div>
        </div>
      </div>
    </>
  );
}
