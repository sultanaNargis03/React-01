export default function Fruit({ name, price, emoji }) {
  //conditionally Rendering List Items
  return (
    <>
      {price > 5 ? (
        <li>
          {emoji} {name} {price}
        </li>
      ) : (
        ""
      )}
    </>
  );
}
