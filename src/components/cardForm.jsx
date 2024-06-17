"use client";

import { useState } from "react";

export const CardForm = () => {
    const [counter, setCounter] = useState(0); //rerender

    function handleIncrement(){
        setCounter((currentValue) => currentValue + 1);
    };


    function handleDecrement(){
        setCounter((currentValue) => currentValue - 1)
    }

  return (
    <div>
        <div>Number: {counter}</div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
