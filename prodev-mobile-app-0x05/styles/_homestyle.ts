import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },

  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#ffffff",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    padding: 10,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 14,
    fontWeight: "500",
  },

  searchControl: {
    height: 36,
    fontSize: 14,
  },

  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },

  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    columnGap: 16,
    alignItems: "center",
  },

  filterContainer: {
    width: 70,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },

  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 30,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export { styles };
