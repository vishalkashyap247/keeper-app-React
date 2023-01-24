import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
// import notesss from './components/notesss';
import Create from './components/Create';


function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote){
    // console.log("our note is : ",newNote);
    setNotes(prevValue=>{
      return([...prevValue, newNote]);
    });
  }

  function deleteNote(id){
    // console.log("delete triggered");
    setNotes((prevNotes)=>{
      return prevNotes.filter((noteItem, index)=>{
        return index!==id;

      })
    });
  }
    return(
      <div>
        <Header />
        <Create 
        onAdd = {addNote}
        />
        {notes.map((noteItem, index)=>{
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
        {/* { notesss.map((notesss) => <Note key={notesss.id} title={notesss.title} content={notesss.content} />)} */}
        <Footer  />
      </div>
    );
}

export default App;
