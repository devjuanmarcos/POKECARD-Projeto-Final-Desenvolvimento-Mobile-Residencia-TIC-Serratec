import React from "react";
import { ProvedorCarrinho } from "./src/Context/CarrinhoContexto";
import { Routes } from "./src/routes";
import { StatusBar } from "expo-status-bar";

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