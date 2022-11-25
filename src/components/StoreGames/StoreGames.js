import React, { Fragment, useState, useEffect } from "react";

import ListGames from "./ListGames";
import image1 from "./img/mk.png";
import image2 from "./img/mc.jpg";
import image3 from "./img/GTA.jpg";
import image4 from "./img/gow.jpg";
import image5 from "./img/smb.jpg";
import image6 from "./img/sf.jpg";
import image7 from "./img/cod.jpg";

import INITIAL_DATA from "./gamesData.json";

[
  INITIAL_DATA[0].image,
  INITIAL_DATA[1].image,
  INITIAL_DATA[2].image,
  INITIAL_DATA[3].image,
  INITIAL_DATA[4].image,
  INITIAL_DATA[5].image,
  INITIAL_DATA[6].image,
] = [image1, image2, image3, image4, image5, image6, image7];

// const INITIAL_DATA = [
//   {
//     id: 0,
//     nameGame: "Mortal Combat",
//     description:
//       "En una misteriosa isla, internada en los mares de China y desconocida por el resto del mundo, los luchadores sobrenaturales luchan por el destino de la Tierra.",
//     image: image1,
//   },
// ];

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

  const addItemHandler = (
    gameName,
    gameDesigners,
    gameDeveloper,
    gameDistributor,
    gameGenre,
    image
  ) => {
    console.log("run Add");
    setgamesData((prevGames) => {
      const updatedGames = [...prevGames];
      updatedGames.push({
        id: Math.random().toString(),
        nombredelibro: gameName,
        creadoresDiseñadores: gameDesigners,
        desarrollador: gameDeveloper,
        distribuidor: gameDistributor,
        genero: gameGenre,
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
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <h1 className="text-dark">Store Games</h1>
          <button className="btn btn-secondary" onClick={returnHandle}>
            Volver a la página principal
          </button>
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
