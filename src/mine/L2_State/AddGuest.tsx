import React, { useEffect, useRef, useState } from "react";

const AddGuest = () => {
  const [guestList, setGuestList] = useState<string[]>([]);
  // const [guestName, setGuestName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const addHandler = () => {
    if (!inputRef.current) return;
    setGuestList([...guestList, inputRef.current.value]);
    inputRef.current.value = "";
  };
  console.log(guestList);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h3>Party Guest List</h3>
      <ul>
        {guestList.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>

      <input type="text" placeholder="name" ref={inputRef} />
      <button onClick={addHandler}>Add</button>
    </div>
  );
};

export default AddGuest;
