import { useState } from "react";

export default function FormUser() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastNamestName}
        ></input>
      </form>
    </div>
  );
}
