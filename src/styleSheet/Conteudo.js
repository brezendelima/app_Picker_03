import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { estilos } from "./estilos";

export default function Conteudo() {
  const [nomeUsr, setNomeUsr] = useState("");
  const [lancheSelecionado, setLancheSelecionado] = useState("Hambúrguer");
  const [observacao, setObservacao] = useState("");
  const [pedido, setPedido] = useState(null);

  const lanches = [
    { nome: "Hambúrguer", emoji: "🍔" },
    { nome: "Pizza", emoji: "🍕" },
    { nome: "Hot Dog", emoji: "🌭" },
  ];

  function getEmoji() {
    const lanche = lanches.find((l) => l.nome === lancheSelecionado);
    return lanche ? lanche.emoji : "🍔";
  }

  function fazerPedido() {
    setPedido({
      nome: nomeUsr,
      lanche: lancheSelecionado,
      observacao: observacao,
    });
  }

  return (
    <View style={estilos.conteudo}>
      <TextInput
        style={estilos.input}
        placeholder="Digite seu nome"
        value={nomeUsr}
        onChangeText={(texto) => setNomeUsr(texto)}
      />

      <Text style={estilos.label}>Escolha seu lanche:</Text>
      <View style={estilos.pickerContainer}>
        <Picker
          selectedValue={lancheSelecionado}
          onValueChange={(itemValue) => setLancheSelecionado(itemValue)}
          style={estilos.picker}
        >
          {lanches.map((lanche) => (
            <Picker.Item
              key={lanche.nome}
              label={lanche.nome}
              value={lanche.nome}
            />
          ))}
        </Picker>
      </View>

      <Text style={estilos.emoji}>{getEmoji()}</Text>

      <TextInput
        style={[estilos.input, estilos.inputMultiline]}
        placeholder="Observações (ex: sem cebola)"
        value={observacao}
        onChangeText={(texto) => setObservacao(texto)}
        multiline={true}
        numberOfLines={3}
      />

      <TouchableHighlight
        style={estilos.botao}
        underlayColor="#2e7d32"
        onPress={fazerPedido}
      >
        <Text style={estilos.botaoTexto}>Fazer Pedido</Text>
      </TouchableHighlight>

      {pedido && (
        <View style={estilos.resultado}>
          <Text style={estilos.resultadoTexto}>Pedido de: {pedido.nome}</Text>
          <Text style={estilos.resultadoTexto}>Lanche: {pedido.lanche}</Text>
          <Text style={estilos.resultadoTexto}>
            Observação: {pedido.observacao}
          </Text>
        </View>
      )}
    </View>
  );
}