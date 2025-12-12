import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [evento, setEvento] = useState("");
  const [lista, setLista] = useState([]);

  function registrarEvento() {
    if (evento.trim() === "") return;
    const data = new Date().toLocaleDateString("pt-BR");
    setLista([...lista, { nome: evento, data }]);
    setEvento("");
  }

  function removerEvento(index) {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  }

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Eventos Estudantis</Text>
      </View>

      {/* Logo */}
      <Image
        source={require("../assets/logo.png")}

        style={styles.logo}
        resizeMode="contain"
      />

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder="Nome do evento"
        value={evento}
        onChangeText={setEvento}
      />

      {/* Botão */}
      <TouchableOpacity style={styles.button} onPress={registrarEvento}>
        <Text style={styles.buttonText}>Registrar Evento</Text>
      </TouchableOpacity>

      {/* Lista */}
      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>
              {item.nome} – {item.data}
            </Text>

            <TouchableOpacity onPress={() => removerEvento(index)}>
              <Text style={styles.trash}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    paddingTop: 20,
  },

  header: {
    width: "100%",
    backgroundColor: "#0B260A",
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 10,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },

  input: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 14,
  },

  button: {
    width: "85%",
    backgroundColor: "#0B260A",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  list: {
    width: "85%",
  },

  listItem: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },

  itemText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },

  trash: {
    fontSize: 20,
  },
});
