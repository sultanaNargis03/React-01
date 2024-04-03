import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
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
      {/* <Fruits /> */}
      {/* <ConditionalComponent /> */}
      <Message />
    </div>
  );
}

export default App;
