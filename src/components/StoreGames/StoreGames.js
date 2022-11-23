import React, { Fragment, useState } from "react";

import ListGames from "./ListGames";

const StoreGames = () => {
  const [gamesData, setgamesData] = useState([
    {
      id: 0,
      nameGame: "Mortal Combat",
      description:
        "En una misteriosa isla, internada en los mares de China y desconocida por el resto del mundo, los luchadores sobrenaturales luchan por el destino de la Tierra.",
    },
  ]);

  const deleteItemHandler = (gameId) => {
    setgamesData( prevGames => {
      const updatedGames = prevGames.filter(game => game.id !== gameId)
      return (updatedGames);
    })
  }

  return (
    <Fragment>
      <ListGames games={gamesData} onDeleteItem={deleteItemHandler}></ListGames>
    </Fragment>
  );
};

export default StoreGames;
