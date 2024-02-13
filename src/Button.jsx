export default function Button({ onSmash, children }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSmash();
        }}
      >
        {children}
      </button>
    </>
  );
}
