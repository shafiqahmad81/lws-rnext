// eslint-disable-next-line react/prop-types
function Cup({ guest }) {
  return <h2>tea cup for a # {guest}</h2>;
}
export default function Teaset() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
