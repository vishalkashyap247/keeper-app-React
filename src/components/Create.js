import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


function Create(props) {

    const[show, setShow]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event){
    props.onAdd(note);
    setShow(false);
    setNote({
        title:"",
        content:""
    });
    event.preventDefault();
  }
  function handleClickkkk(){
    setShow(true);
  }

  return (
    <div>
      <form className="create-note">
        {show&&<input type="text" name="title" value={note.title} onChange={handleChange} placeholder="Title" />}
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClickkkk}
          value={note.content}
          placeholder="Take a note...."
          rows={show?3:1}
        />
        {/* <button  > */}
        <Zoom in={show}>
            <Fab onClick={submitNote} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Zoom>
      {/* </button> */}
      </form>
    </div>
  );
}

export default Create;
