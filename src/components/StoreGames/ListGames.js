import React, { Fragment } from "react";
import AddGame from "./AddGame";
import ButtonDelete from "./ButtonDelete";

import classes from "./ListGames.module.css";

const ListGames = (props) => {
  return (
    <Fragment>
      <div className="container w-100 d-flex flex-column my-4 mb-auto">
        <div className="row px-auto d-flex justify-content-center">
          {props.games.map((game) => {
            
            return (
              <div
                key={game.id}
                id={game.id}
                className="card m-2 pt-2"
                style={{ width: 18 + "rem" }}
              >
                <img
                  src={game.image}
                  className={`${"card-img-top"} ${classes.image}`}
                  alt="game1"
                ></img>
                <h5 className="card-title text-dark mt-3">
                  {game.nombreDelJuego}
                </h5>
                <div className="card-body text-dark d-flex flex-column">
                  <div className="card">
                    <ul className="list-group list-group-flush text-dark">
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Creadores y Diseñadores:
                        </h6>
                        {game.creadoresDiseñadores}
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Desarrollador:
                        </h6>
                        {game.desarrollador}
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Distribuidor:
                        </h6>
                        {game.distribuidor}
                      </li>
                      <li className="list-group-item">
                        <h6 className="card-subtitle mb-2 text-muted">
                          Género:
                        </h6>
                        {game.genero}
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex mt-auto pt-2">
                    <button className="btn btn-primary px-auto">Edit</button>
                    <ButtonDelete
                      id={game.id}
                      className="btn btn-primary ms-auto"
                      onDelete={props.onDeleteItem}
                    >
                      Delete Game
                    </ButtonDelete>
                  </div>
                </div>
              </div>
            );
          })}
          <AddGame onNewGameData={props.onNewGameData}></AddGame>
        </div>
      </div>
    </Fragment>
  );
};

export default ListGames;
