"use client";

import { useEffect, useState } from "react";

export const CardForm = () => {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    function handleAddNote(){
        const newNotes = [...notes]; //cloning dari data notes ke newNotes
        newNotes.push(note) // ditambah new note
        setNotes(newNotes) // set ke State
        localStorage.setItem("notes", JSON.stringify(newNotes)); // disimpan ke local storage
        setNote("");
        

    }

    //dijalankan sekali ketika component di mount
    useEffect(() => {
        const existingData = localStorage.getItem("notes") //diambil dari local storage
        if(existingData){
            const parseData = JSON.parse(existingData)// parsing string jadi array
            setNotes(parseData);
        }
    }, [notes])

  return (
    <div>
        <input value={note} onChange={(evet) => setNote(event.target.value)} />
        <button onClick={handleAddNote}>Add to Notes</button>
        <section>
            {notes.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </section>
    </div>
  );
};
