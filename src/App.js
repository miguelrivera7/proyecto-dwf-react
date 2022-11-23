import React, { Fragment, useState } from "react";

import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import StoreBooks from "./components/StoreBooks/StoreBooks";
import StoreGames from "./components/StoreGames/StoreGames";

const App = () => {
  
  const [selectedStore, setSelectedStore] = useState({
    storeGames: false,
    storeBooks: false,
  });

  const saveStoreClickHandler = (chosenStore) => {
    setSelectedStore(chosenStore);
  };

  console.log(selectedStore);

  return (
    <Fragment>
      {selectedStore.storeGames && <StoreGames></StoreGames>}
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
