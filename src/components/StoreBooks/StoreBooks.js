import React, { Fragment, useState, useEffect } from "react";

import ListBooks from "./ListBooks";
import image1 from "./img/harrypotter1.jpg";
import image2 from "./img/lacomunidaddelanillo.jpg";
import image3 from "./img/dracula.jpg";
import image4 from "./img/it.jpg";


import INITIAL_DATA from "./booksData.json";

[
  INITIAL_DATA[0].image,
  INITIAL_DATA[1].image,
  INITIAL_DATA[2].image,
  INITIAL_DATA[3].image,

] = [image1, image2, image3, image4];

// const INITIAL_DATA = [
//   {
//     id: 0,
//     nameBook: "Mortal Combat",
//     description:
//       "En una misteriosa isla, internada en los mares de China y desconocida por el resto del mundo, los luchadores sobrenaturales luchan por el destino de la Tierra.",
//     image: image1,
//   },
// ];

const StoreBooks = (props) => {
  const [booksData, setbooksData] = useState(INITIAL_DATA);

  const storedBooksData = JSON.parse(localStorage.getItem("booksData"));

  useEffect(() => {
    if ((storedBooksData !== null) & (storedBooksData !== INITIAL_DATA)) {
      console.log("not null");
      setbooksData(storedBooksData);
    }

    return () => {
      if ((storedBooksData === null) & (booksData !== INITIAL_DATA)) {
        console.log("it is null");
        setbooksData(INITIAL_DATA);
      }
    };
  }, []);

  console.log(booksData);
  console.log(JSON.parse(localStorage.getItem("booksData")));

  const deleteItemHandler = (bookId) => {
    console.log("run delete");
    setbooksData((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.id !== bookId);
      localStorage.setItem("booksData", JSON.stringify(updatedBooks));
      return updatedBooks;
    });
  };

  const addItemHandler = (
    bookName,
    bookAuthor,
    bookGenre,
    bookDate,
    image
  ) => {
    console.log("run Add");
    setbooksData((prevBooks) => {
      const updatedBooks = [...prevBooks];
      updatedBooks.push({
        id: Math.random().toString(),
        nombreDelJuego: bookName,
        autor: bookAuthor,
        genero: bookGenre,
        fechapublicacion: bookDate,
        image: image,
      });
      localStorage.setItem("booksData", JSON.stringify(updatedBooks));
      return updatedBooks;
    });
  };

  const returnHandle = () => {
    localStorage.removeItem("inStore");
    props.onReturn();
  };

  return (
    <Fragment>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h1 className="text-dark">Store Books</h1>
          <button className="btn btn-secondary" onClick={returnHandle}>
            Volver a la página principal
          </button>
        </div>
      </nav>

      <ListBooks
        books={booksData}
        onNewBookData={addItemHandler}
        onDeleteItem={deleteItemHandler}
      ></ListBooks>
    </Fragment>
  );
};

export default StoreBooks;
