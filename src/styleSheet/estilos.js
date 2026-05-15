import { StyleSheet } from "react-native";
export const estilos = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },

  cabecalho: {
    backgroundColor: "#f5f0a8",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cabecalhoTexto: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },

  conteudo: {
    flex: 1,
    backgroundColor: "#f5f0a8",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },

  inputMultiline: {
    height: 80,
    textAlignVertical: "top",
  },

  label: {
    fontSize: 15,
    color: "#333",
    marginBottom: 6,
  },

  pickerContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 12,
  },
  picker: {
    height: 50,
    width: "100%",
  },

  emoji: {
    fontSize: 70,
    textAlign: "center",
    marginVertical: 10,
  },

  botao: {
    backgroundColor: "#4caf50",
    borderRadius: 6,
    padding: 14,
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 36,
    marginTop: 10,
    marginBottom: 16,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  resultado: {
    alignItems: "center",
    marginTop: 8,
  },
  resultadoTexto: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
});