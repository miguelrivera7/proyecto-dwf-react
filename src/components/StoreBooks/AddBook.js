import React, { Fragment, useState } from "react";
import AddBookModalForm from "./AddBookModalForm";


const AddBook = (props) => {
  const [newBook, setnewBook] = useState(false);

  const addFormHandler = (event) => {
    event.preventDefault();
    setnewBook(true);
  };

  const cancelAddBook = (cancel) => {
    setnewBook(cancel);
  }

  return (
    <Fragment>
      {newBook && <AddBookModalForm onNewBookData={props.onNewBookData} onCancel={cancelAddBook}></AddBookModalForm>}
      <div className="card m-2 pt-2" style={{ width: 18 + "rem" }}>
        <div className="card-body text-dark d-flex flex-column justify-content-center">
          <h1>Add New Book</h1>
          <button className="btn btn-primary" onClick={addFormHandler}>
            Add Book
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddBook;
