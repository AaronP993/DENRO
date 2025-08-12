import { View, Text, StyleSheet } from 'react-native';

export default function ViewPreviousEntries() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Entries</Text>
      <Text>No submissions yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
