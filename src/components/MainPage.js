import React from "react";

import gameImage from "../img/game.jpg";
import bookImage from "../img/book.png";

const MainPage = (props) => {

  const tiendaGamesHandler = () => {
    props.onStoreGamesClick({storeGames:true, storeBooks:false});
  };

  const tiendaBooksHandler = () => {
    props.onStoreBooksClick({storeGames:false, storeBooks:true});
  };

  return (
    <div className="h-100 d-flex text-center text-bg-dark">
      <div className="h-100 cover-container w-100 p-3 mx-auto flex-column">
        <section class='pb-5'>
          <h1>Tienda Kodigo</h1>
        </section>
        <div className="container w-100 d-flex flex-column mt-auto mb-auto">
          <div className="row px-auto d-flex justify-content-center">
            <div className="col-12 col-md-6 px-3 mb-3">
              <h1>Libros</h1>
              <img
                src={gameImage}
                onClick={tiendaGamesHandler}
                alt="Game"
                className="image rounded"
              />
            </div>
            <div className="col-12 col-md-6 px-3 mb-3">
              <h1>Juegos</h1>
              <img
                src={bookImage}
                onClick={tiendaBooksHandler}
                alt="Book"
                className="image rounded"
              ></img>
            </div>
          </div>
        </div>

        <footer className="mt-0 text-white-50">
          <p>Hecho por ..................</p>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
