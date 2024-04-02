import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
function App() {
  //   const person = {
  //     name: "Nargis",
  //     message: "Hi there!",
  //     emoji: "👋",
  //     seatNumbers: [1, 4, 7],
  //   };
  return (
    <div className="App">
      {/* <Hello person={person}/> */}
      <Fruits />
    </div>
  );
}

export default App;
