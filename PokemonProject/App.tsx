import React from "react";
import { Routes } from "./src/routes";
import Login from "./src/screens/Login";

import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#E50914",
      background: "#3C3C3C",
      placeholder: "#ffffff",
      text: "#ffffff",
    },
  };

  return <Login />;
};
export default App;
