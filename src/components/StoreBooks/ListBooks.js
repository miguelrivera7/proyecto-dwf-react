import React, { Fragment } from "react";
import AddBook from "./AddBook";
import ButtonDelete from "./ButtonDelete";

import classes from "./ListBooks.module.css";

const ListBooks = (props) => {

  return (
    <Fragment>
      <div className="container w-100 d-flex flex-column my-4 mb-auto">
        <div className="row px-auto d-flex justify-content-center">
          {props.books.map((book) => {
            
            return (
              <div
                key={book.id}
                id={book.id}
                className="card m-2 pt-2"
                style={{ width: 18 + "rem" }}
              >
                <img
                  src={book.image}
                  className={`${"card-img-top"} ${classes.image}`}
                  alt="book1"
                ></img>
                <h5 className="card-title text-dark mt-3">
                  {book.nombredelibro}
                </h5>
                <div className="card-body text-dark d-flex flex-column">
                  <div className="card">
                    <ul className="list-group list-group-flush text-dark">
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Autor:
                        </h6>
                        {book.autor}
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Género:
                        </h6>
                        {book.genero}
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Fecha de Publicación:
                        </h6>
                        {book.fechapublicacion}
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Género:
                        </h6>
                        {book.genero}
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex mt-auto pt-2">
                    <button className="btn btn-primary px-auto">Edit</button>
                    <ButtonDelete
                      id={book.id}
                      className="btn btn-primary ms-auto"
                      onDelete={props.onDeleteItem}
                    >
                      Delete book
                    </ButtonDelete>
                  </div>
                </div>
              </div>
            );
          })}
          <AddBook onNewBookData={props.onNewBookData}></AddBook>
        </div>
      </div>
    </Fragment>
  );
};

export default ListBooks;
