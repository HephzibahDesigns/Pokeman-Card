import { View, Text, Platform, StyleSheet, Image } from "react-native";

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
  }
};

export default function PokeManCard({
  name,
  image,
  type,
  hp,
  moves,
  weakness,
}) {
  const { borderColor, emoji } = getTypeDetails(type);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardName}>
        <Text style={styles.cardNameText}>{name}</Text>
        <Text style={styles.cardNameHp}> ❤️HP: {hp}</Text>
      </View>

      <View style={styles.cardImage}>
        <Image
          source={image}
          style={{
            width: 150,
            height: 150,
          }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.typeEmoji}>{emoji}</Text>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.move}>
        <Text style={styles.moveText}>Moves: {moves.join(", ", ", ")}</Text>
      </View>

      <View>
        <Text style={styles.moveText}>Weakness: {weakness.join(", ", "")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 16,
    borderWidth: 1,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },

      android: {
        elevation: 5,
      },
    }),
  },

  cardName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNameText: {
    fontSize: 19,
    fontWeight: "500",
  },

  cardNameHp: {
    fontSize: 16,
    fontWeight: "500",
  },

  cardImage: {
    alignItems: "center",
    textAlign: "center",
    margin: 20,
  },

  typeContainer: {
    alignItems: "center",
    marginVertical: 15,
  },

  badge: {
    flexDirection: "row",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: "center",
  },

  typeEmoji: {
    fontSize: 22,
    marginRight: 5,
  },

  typeText: {
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
  },

  move: {
    paddingVertical: 10,
  },

  moveText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
