import React, { Fragment, useState } from "react";
import AddGameModalForm from "./AddGameModalForm";


const AddGame = () => {
  const [newGame, setnewGame] = useState(false);

  const addFormHandler = () => {
    setnewGame(true);
  };

  const cancelAddGame = (cancel) => {
    setnewGame(cancel);
  }

  return (
    <Fragment>
      {newGame && <AddGameModalForm onCancel={cancelAddGame}></AddGameModalForm>}
      <div className="card h-auto" style={{ width: 18 + "rem" }}>
        <div className="card-body text-dark">
          <h1>Add New Game</h1>
          <button className="btn btn-primary" onClick={addFormHandler}>
            Add Game
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddGame;
