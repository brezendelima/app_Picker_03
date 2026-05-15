import React from "react";
import { View, Text } from "react-native";
import { estilos } from "./estilos";

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Text style={estilos.cabecalhoTexto}>Lanchonete App</Text>
    </View>
  );
}