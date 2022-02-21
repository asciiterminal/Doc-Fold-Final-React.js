import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <MdOutlineDeleteForever size={30}/>
      </button>
    </div>
  );
}

export default Note;
