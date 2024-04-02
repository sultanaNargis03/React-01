export default function Fruit({ name, price, emoji, soldout }) {
  //conditionally Rendering a message using ternary operator
  return (
    <>
      <li>
        {emoji} {name} {price} {soldout ? "soldOut" : ""}
      </li>
    </>
  );
}
