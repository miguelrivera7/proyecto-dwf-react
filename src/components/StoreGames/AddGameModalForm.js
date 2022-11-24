import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";

import classes from "./AddGameModalForm.module.css";
import noImageIcon from './img/noImageUploadedIcon.png';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalFormOverlay = (props) => {
  const gameNameRef = useRef();
  const gameDescriptionRef = useRef();

  const [image, setImage] = useState(noImageIcon);

  const cancelHandler = (event) => {
    event.preventDefault();

    props.onCancel(false);
  };

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputGameName = gameNameRef.current.value;
    const inputGameDescription = gameDescriptionRef.current.value;

    console.log(inputGameName, inputGameDescription);

    props.onNewGameData(inputGameName, inputGameDescription, image);

    props.onCancel(false);
  };

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Añade un Juego</h2>
      </header>
      <form onSubmit={submitHandler} className={classes.content}>
        <label className="text-black">Nombre del Juego</label>
        <input ref={gameNameRef} type="text"></input>
        <label className="text-black">Descripcion</label>
        <input ref={gameDescriptionRef} type="text"></input>
        <div className="my-3 text-black">
          <label htmlFor="formFile" className="form-label">
            Select Game Image
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            onChange={handleChange}
          ></input>
          <img
            src={image}
            alt="Game"
            className={`${classes.image} ${"mt-1 float-center"}`}
          ></img>
        </div>

        <footer className={classes.actions}>
          <button className="btn btn-primary mx-3" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Game
          </button>
        </footer>
      </form>
    </Card>
  );
};

const AddGameModalForm = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalFormOverlay
          onNewGameData={props.onNewGameData}
          onCancel={props.onCancel}
        ></ModalFormOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddGameModalForm;
