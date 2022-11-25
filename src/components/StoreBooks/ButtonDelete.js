import React from "react";

const ButtonDelete = (props) => {

  const deleteHandler = () =>{
    props.onDelete(props.id)
  }
    
  return (
    <button onClick={deleteHandler} className={props.className} style={props.style}>
      {props.children}
    </button>
  );
};

export default ButtonDelete;
