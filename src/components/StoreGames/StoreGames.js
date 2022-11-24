import React, { Fragment, useState, useEffect } from "react";

import ListGames from "./ListGames";
import image1 from "./img/mk.png";

const INITIAL_DATA = [
  {
    id: 0,
    nameGame: "Mortal Combat",
    description:
      "En una misteriosa isla, internada en los mares de China y desconocida por el resto del mundo, los luchadores sobrenaturales luchan por el destino de la Tierra.",
    image: image1,
  },
];

const StoreGames = (props) => {
  const [gamesData, setgamesData] = useState(INITIAL_DATA);

  const storedGamesData = JSON.parse(localStorage.getItem("gamesData"));

  useEffect(() => {
    if ((storedGamesData !== null) & (storedGamesData !== INITIAL_DATA)) {
      console.log("not null");
      setgamesData(storedGamesData);
    }

    return () => {
      if ((storedGamesData === null) & (gamesData !== INITIAL_DATA)) {
        console.log("it is null");
        setgamesData(INITIAL_DATA);
      }
    };
  }, []);

  console.log(gamesData);
  console.log(JSON.parse(localStorage.getItem("gamesData")));

  const deleteItemHandler = (gameId) => {
    console.log("run delete");
    setgamesData((prevGames) => {
      const updatedGames = prevGames.filter((game) => game.id !== gameId);
      localStorage.setItem("gamesData", JSON.stringify(updatedGames));
      return updatedGames;
    });
  };

  const addItemHandler = (gameName, gameDescription, image) => {
    console.log("run Add");
    setgamesData((prevGames) => {
      const updatedGames = [...prevGames];
      updatedGames.push({
        id: Math.random().toString(),
        nameGame: gameName,
        description: gameDescription,
        image: image,
      });
      localStorage.setItem("gamesData", JSON.stringify(updatedGames));
      return updatedGames;
    });
  };

  const returnHandle = () => {
    localStorage.removeItem("inStore");
    props.onReturn();
  };

  return (
    <Fragment>
      <nav class="navbar bg-light">
        <div className="container-fluid">
          <h1 className="text-dark">Store Games</h1>
          <button onClick={returnHandle}>Return to Main Page</button>
        </div>
      </nav>

      <ListGames
        games={gamesData}
        onNewGameData={addItemHandler}
        onDeleteItem={deleteItemHandler}
      ></ListGames>
    </Fragment>
  );
};

export default StoreGames;
