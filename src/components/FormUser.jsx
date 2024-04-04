import { useState } from "react";

export default function FormUser() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        ></input>
      </form>
    </div>
  );
}
