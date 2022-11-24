import React, { Fragment, useState } from "react";

import ListGames from "./ListGames";
import image1 from "./img/mk.png";

const StoreGames = () => {
  const [gamesData, setgamesData] = useState([
    {
      id: 0,
      nameGame: "Mortal Combat",
      description:
        "En una misteriosa isla, internada en los mares de China y desconocida por el resto del mundo, los luchadores sobrenaturales luchan por el destino de la Tierra.",
      image: image1,
    },
  ]);

  const deleteItemHandler = (gameId) => {
    setgamesData((prevGames) => {
      const updatedGames = prevGames.filter((game) => game.id !== gameId);
      return updatedGames;
    });
  };

  const addItemHandler = (gameName, gameDescription, image) => {
    setgamesData((prevGames) => {
      const updatedGames = [...prevGames];
      updatedGames.push({
        id: Math.random().toString(),
        nameGame: gameName,
        description: gameDescription,
        image: image,
      });
      return updatedGames;
    });
  };

  return (
    <Fragment>
      <ListGames
        games={gamesData}
        onNewGameData={addItemHandler}
        onDeleteItem={deleteItemHandler}
      ></ListGames>
    </Fragment>
  );
};

export default StoreGames;
