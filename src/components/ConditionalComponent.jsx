import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponent() {
  const display = false;

  //conditonally rendering jsx
  //   if (display) {
  //     return (
  //       <div>
  //         <h3>This is conditional component!</h3>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h3>Code Everyday!</h3>
  //       </div>
  //     );
  //   }

  //Conditionally Rendering component

  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
