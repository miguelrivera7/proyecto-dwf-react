import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";

import classes from "./AddBookModalForm.module.css";
import noImageIcon from "./img/noImageUploadedIcon.png";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalFormOverlay = (props) => {
  const bookNameRef = useRef();
  const bookAuthorRef = useRef();
  const bookGenreRef = useRef();
  const bookDateRef = useRef();

  const [image, setImage] = useState(noImageIcon);
  const [isValid, setIsValid] = useState({
    inputNameIsValid: false,
    inputAuthorIsValid: false,
    inputGenreIsValid: false,
    inputDateIsValid: false,
    inputImageIsValid: false,
  });

  // const nameValidityHandle = (event) => {

  //   console.log(event.target.value.trim().length);

  //   if(event.target.value.trim().length <= 1){
  //     console.log('validando')
  //     setIsValid({
  //       inputNameIsValid: true,
  //       inputAuthorIsValid: false,
  //       inputGenreIsValid: false,
  //       inputDateIsValid: false,
  //     });

  //     console.log(isValid.inputNameIsValid)
  //   }
  // }

  const cancelHandler = (event) => {
    event.preventDefault();

    props.onCancel(false);
  };

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputBookName = bookNameRef.current.value;
    const inputBookAuthor = bookAuthorRef.current.value;
    const inputGenre = bookGenreRef.current.value;
    const inputDate = bookDateRef.current.value;

    const validando = {
      inputNameIsValid: inputBookName.trim().length === 0,
      inputAuthorIsValid: inputBookAuthor.trim().length === 0,
      inputGenreIsValid: inputGenre.trim().length === 0,
      inputDateIsValid: inputDate.trim().length === 0,
      inputImageIsValid: image === noImageIcon,
    };

    if (
      validando.inputNameIsValid ||
      validando.inputAuthorIsValid ||
      validando.inputGenreIsValid ||
      validando.inputDateIsValid ||
      validando.inputImageIsValid
    ) {
      setIsValid(validando);
      return;
    }

    console.log(inputBookName);

    props.onNewBookData(
      inputBookName,
      inputBookAuthor,
      inputGenre,
      inputDate,
      image
    );

    props.onCancel(false);
  };

  return (
    <Card className={classes.modal}>
      <header
        className={`${classes.header} ${"d-flex justify-content-between"}`}
      >
        <h2>Añade un Libro</h2>
        <button
          onClick={cancelHandler}
          type="button"
          className="btn-close my-auto"
          aria-label="Close"
        ></button>
      </header>
      <form onSubmit={submitHandler} className={`${classes.content}`}>
        <div className="row">
          {(isValid.inputNameIsValid ||
            isValid.inputAuthorIsValid ||
            isValid.inputGenreIsValid ||
            isValid.inputDateIsValid) && (
            <div className="alert alert-danger" role="alert">
              Ingresa toda la informacion solicitada.
            </div>
          )}
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Nombre del Libro</label>
            <input
              className={`${"col-12 col-md-6 form-control"} ${
                isValid.inputNameIsValid && "border border-danger"
              }`}
              ref={bookNameRef}
              type="text"
              //onChange={nameValidityHandle}
            ></input>
          </div>
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Autor</label>
            <input
              className={`${"form-control"} ${
                isValid.inputAuthorIsValid && "border border-danger"
              }`}
              ref={bookAuthorRef}
              type="text"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-2">
            <label className="text-black">Género</label>
            <input
              className={`${"form-control"} ${
                isValid.inputGenreIsValid && "border border-danger"
              }`}
              ref={bookGenreRef}
              type="text"
            ></input>
          </div>
          <div className="col-12 col-sm-6">
            <label className="text-black">Fecha de Publicación</label>
            <input
              className={`${"form-control"} ${
                isValid.inputDateIsValid && "border border-danger"
              }`}
              ref={bookDateRef}
              type="text"
            ></input>
          </div>
        </div>
        <div className="my-3 text-black">
          <label htmlFor="formFile" className="form-label">
            Cargue una imagen del juego
          </label>
          <input
            className={`${"form-control"} ${
              isValid.inputImageIsValid && "border border-danger"
            }`}
            type="file"
            id="formFile"
            onChange={handleChange}
          ></input>
          <img
            src={image}
            alt="Book"
            className={`${classes.image} ${"mt-1 float-center"}`}
          ></img>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary mx-3" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </form>
    </Card>
  );
};

const AddBookModalForm = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalFormOverlay
          onNewBookData={props.onNewBookData}
          onCancel={props.onCancel}
        ></ModalFormOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default AddBookModalForm;
