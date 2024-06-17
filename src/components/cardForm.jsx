"use client";

import { useState } from "react";

export const CardForm = () => {
    const [name, setName] = useState("initialvalue"); //rerender

  return (
    <div>
        <div>{name}</div>
        <input onChange={(event) => setName(event.target.value)} className="border p-2"/>
    </div>
  );
};
