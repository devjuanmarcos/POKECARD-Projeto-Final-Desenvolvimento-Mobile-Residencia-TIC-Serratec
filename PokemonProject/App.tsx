import React from "react";
import { StatusBar } from "react-native";
import { ProvedorCarrinho } from "./src/Context/CarrinhoContexto";
import { Routes } from "./src/routes";

export default function App  () {

  return (    
  <ProvedorCarrinho>
    <StatusBar 
    hidden={false}
    translucent={true}
    />
    <Routes/>

  </ProvedorCarrinho>
  );
}