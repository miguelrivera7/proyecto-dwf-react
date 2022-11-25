import React from "react";

import gameImage from "../../img/game.jpg";
import bookImage from "../../img/book.png";
import styles from "./MainPage.module.css";

const MainPage = (props) => {
  const tiendaGamesHandler = () => {
    props.onStoreGamesClick({ storeGames: true, storeBooks: false });
  };

  const tiendaBooksHandler = () => {
    props.onStoreBooksClick({ storeGames: false, storeBooks: true });
  };

  return (
    <div className="h-100 w-100 d-flex text-center text-bg-dark">
      <div className="h-100 cover-container w-100 p-3 mx-auto flex-column">
        <section className="pb-5" id={styles.seccion}>
          <h1>Tienda Kodigo</h1>
        </section>
        <div className="container w-100 d-flex flex-column mt-auto mb-auto">
          <div
            className="row px-auto d-flex justify-content-center"
            id={styles.tienda}
          >
            <div className="col-12 col-md-6 px-3 mb-3">
              <h1>Videojuegos</h1>
              <img
                src={gameImage}
                onClick={tiendaGamesHandler}
                alt="Game"
                className="image rounded"
              />
            </div>
            <div className="col-12 col-md-6 px-3 mb-3">
              <h1>Libros</h1>
              <img
                src={bookImage}
                onClick={tiendaBooksHandler}
                alt="Book"
                className="image rounded"
              ></img>
            </div>
          </div>
        </div>

        <footer className="mt-2 text-white-50 wrapper">
          <p className={styles["typing-demo"]}>
            {
              "Hecho por Equipo 3: Miguel Rivera, Diego Garcia, Brayand Nerio, William Franco"
            }
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MainPage;
