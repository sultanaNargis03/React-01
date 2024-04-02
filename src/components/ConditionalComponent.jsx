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

  // if (display) {
  //   return <Welcome />;
  // } else {
  //   return <Code />;
  // }

  //Conditional Rendering Using Element variables

  let message;
  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }
  return message;
}
