import React, { Fragment, useEffect, useState } from "react";

import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import StoreBooks from "./components/StoreBooks/StoreBooks";
import StoreGames from "./components/StoreGames/StoreGames";

const App = () => {
  const [selectedStore, setSelectedStore] = useState({
    storeGames: false,
    storeBooks: false,
  });

  useEffect(() => {
    const storedSelectedStoreInformation = localStorage.getItem("inStore");
    if (storedSelectedStoreInformation === "0") {
      setSelectedStore({
        storeGames: true,
        storeBooks: false,
      });
    } else if (storedSelectedStoreInformation === "1") {
      setSelectedStore({
        storeGames: false,
        storeBooks: true,
      });
    }
  }, []);

  const saveStoreClickHandler = (chosenStore) => {
    if (chosenStore.storeGames) {
      localStorage.setItem("inStore", "0");
    } else if (chosenStore.storeBooks) {
      localStorage.setItem("inStore", "1");
    }

    setSelectedStore(chosenStore);
  };

  const returnHandle = () => {
    setSelectedStore({
      storeGames: false,
      storeBooks: false,
    });
  };

  return (
    <Fragment>
      {selectedStore.storeGames && (
        <StoreGames onReturn={returnHandle}></StoreGames>
      )}
      {selectedStore.storeBooks && <StoreBooks></StoreBooks>}
      {(selectedStore.storeBooks === false) &
        (selectedStore.storeGames === false) && (
        <MainPage
          onStoreGamesClick={saveStoreClickHandler}
          onStoreBooksClick={saveStoreClickHandler}
        ></MainPage>
      )}
    </Fragment>
  );
};

export default App;
