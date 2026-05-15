import React from "react";
import { View } from "react-native";
import {estilos} from "./src/styleSheet/estilos";
import Cabecalho from "./src/styleSheet/Cabecalho";
import Conteudo from "./src/styleSheet/Conteudo";


function App() {
  return (
    <View style={estilos.container}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}

export default App;