import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";

import classes from "./AddGameModalForm.module.css";
import noImageIcon from "./img/noImageUploadedIcon.png";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalFormOverlay = (props) => {
  const gameNameRef = useRef();
  const gameDesignersRef = useRef();
  const gameDeveloperRef = useRef();
  const gameDistributorsRef = useRef();
  const gameGenreRef = useRef();

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
    const inputGameDesigner = gameDesignersRef.current.value;
    const inputGameDeveloper = gameDeveloperRef.current.value;
    const inputGameDistributor = gameDistributorsRef.current.value;
    const inputGenreRef = gameGenreRef.current.value;

    console.log(inputGameName, inputGameDesigner);

    props.onNewGameData(
      inputGameName,
      inputGameDesigner,
      inputGameDeveloper,
      inputGameDistributor,
      inputGenreRef,
      image
    );

    props.onCancel(false);
  };

  return (
    <Card className={classes.modal}>
      <header
        className={`${classes.header} ${"d-flex justify-content-between"}`}
      >
        <h2>Añade un Juego</h2>
        <button
          onClick={cancelHandler}
          type="button"
          className="btn-close my-auto"
          aria-label="Close"
        ></button>
      </header>
      <form onSubmit={submitHandler} className={classes.content}>
        <div className="row">
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Nombre del Juego</label>
            <input
              className="col-12 col-md-6 form-control"
              ref={gameNameRef}
              type="text"
            ></input>
          </div>
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Diseñadores y Creadores</label>
            <input
              className="col-12 col-md-6 form-control"
              ref={gameDesignersRef}
              type="text"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Developer</label>
            <input
              className="col-12 col-md-6 form-control"
              ref={gameDeveloperRef}
              type="text"
            ></input>
          </div>
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Distribuidor</label>
            <input
              className="col-12 col-md-6 form-control"
              ref={gameDistributorsRef}
              type="text"
            ></input>
          </div>
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Género</label>
            <input
              className="col-12 col-md-6 form-control"
              ref={gameGenreRef}
              type="text"
            ></input>
          </div>
        </div>
        <div className="my-3 text-black">
          <label htmlFor="formFile" className="form-label">
            Cargue una imagen del juego
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

        <div className="modal-footer">
          <button className="btn btn-secondary mx-3" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Game
          </button>
        </div>
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
