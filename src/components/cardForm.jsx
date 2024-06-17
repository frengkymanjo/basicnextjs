"use client";


export const CardForm = () => {
    let name = "";

  return (
    <div>
        <div>{name}</div>
        <input onChange={(event) => (name= event.target.value)}/>
    </div>
  );
};
