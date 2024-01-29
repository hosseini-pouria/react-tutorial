import React from "react";
import Note from "./Note";

export default function StickyNote() {

    const notesData = [
        {title:'Title #1', content: 'Text Content #1'},
        {title:'Title #2', content: 'Text Content #2'},
        {title:'Title #3', content: 'Text Content #3'},
        {title:'Title #4', content: 'Text Content #4'},
        {title:'Title #5', content: 'Text Content #5'}
    ]

    const notes = notesData.map((note, key) => <Note key={key} title={note.title} content={note.content}/>)

    return (
        <ul>
            {notes}
        </ul>
    )
}