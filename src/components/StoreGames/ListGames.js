import React, { Fragment } from "react";
import AddGame from "./AddGame";
import ButtonDelete from "./ButtonDelete";

import image from "./img/mk.png";

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
                className="card h-50 mx-2"
                style={{ width: 18 + "rem" }}
              >
                <img src={game.image} className="card-img-top" alt="game1"></img>
                <div className="card-body text-dark">
                  <h5 className="card-title">{game.nameGame}</h5>
                  <p className="card-text">{game.description}</p>
                  <ButtonDelete
                    id={game.id}
                    className="btn btn-primary"
                    onDelete={props.onDeleteItem}
                  >
                    Delete Game
                  </ButtonDelete>
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
