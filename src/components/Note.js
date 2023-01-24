import './note.css';
// import DeleteIcon from "@material-ui/icons/Delete";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props){
    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="delbutton" onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}

export default Note;