import Favorites from "./Componnends/Favotites";
import ErrorBoundary from "./Componnends/ErrorBoundary";
import Weather from "./Componnends/Weather";
import DrawerAppBar from "./Componnends/Nav";

import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import "./App.css";

export const AppContext = createContext();
function App() {
  const [nameCity, setCityName] = useState();
  const [favorite, setFavorite] = useState([]);
  return (
    <>
      <ErrorBoundary>
        <AppContext.Provider
          value={{
            nameCity,
            setCityName,
            favorite,
            setFavorite,
          }}
        >
          <DrawerAppBar />
          <Routes>
            <Route path="/" element={<Weather />}></Route>
            <Route path="/Weather" element={<Weather />}></Route>
            <Route path="/Favorite" element={<Favorites />}></Route>
            <Route path="*" element={<h2>404 Error not found</h2>}></Route>
          </Routes>
        </AppContext.Provider>
      </ErrorBoundary>
    </>
  );
}
export default App;
