import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 12,
    color: "#000",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },

  button: {
    backgroundColor: "#34967C",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
