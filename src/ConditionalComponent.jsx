export default function ConditionalComponent() {
  const display = false;

  //conditonally rendering jsx
  if (display) {
    return (
      <div>
        <h3>This is conditional component!</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code Everyday!</h3>
      </div>
    );
  }
}
