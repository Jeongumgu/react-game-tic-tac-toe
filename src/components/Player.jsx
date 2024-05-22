import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEdting, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  //   let btnCaption = "Edit";

  if (isEdting) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdting ? "Save" : "Edit"}</button>
    </li>
  );
}
