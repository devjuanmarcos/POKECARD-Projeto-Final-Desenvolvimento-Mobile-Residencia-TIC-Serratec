import React from "react";
import { Routes } from "./src/routes";
import Login from "./src/screens/Login";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { Pokemon } from "./src/screens/Produto";

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "red",
      background: "#3C3C3C",
      placeholder: "#ffffff",
      text: "#fff",
    },
  };

  return <Pokemon />;
};
export default App;
