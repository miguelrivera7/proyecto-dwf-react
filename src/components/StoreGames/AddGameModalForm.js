import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";

import classes from "./AddGameModalForm.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalFormOverlay = (props) => {
  const cancelHandler = (event) => {
    event.preventDefault();

    props.onCancel(false);
  };
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Añade un Juego</h2>
      </header>
      <form className={classes.content}>
        <label className="text-black">Nombre del Juego</label>
        <input type="text"></input>
        <label className="text-black">Descripcion</label>
        <input type="text"></input>

        <footer className={classes.actions}>
          <button className="btn btn-primary" onClick={cancelHandler}>
            Cancel
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
        <ModalFormOverlay onCancel={props.onCancel}></ModalFormOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddGameModalForm;
