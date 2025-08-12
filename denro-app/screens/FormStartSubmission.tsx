import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function FormStartSubmission() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enumerators Report</Text>
      <Text style={styles.link} onPress={() => router.back()}>← Back</Text>

      <View style={styles.card}>
        <Text>Date: 20/03/2025</Text>
        <TextInput style={styles.input} placeholder="Name of Proponent/Owner" />
        <TextInput style={styles.input} placeholder="Contact number" />
        <TextInput style={styles.input} placeholder="Email address" />
        <TextInput
          style={styles.input}
          placeholder="Location (Sitio, Brgy, Municipality, Province)"
        />
        <Text style={styles.text}>Coordinates:</Text>
        <Text>Latitude: 10.3711857</Text>
        <Text>Longitude: 123.9740793</Text>
        <TextInput
          style={styles.input}
          placeholder="Area covered/occupied(s.q) per commercial/industrial structure"
        />

        <Text style={styles.text}>Status of establishment/facility/structure:</Text>
        <View>
          <Text>○ Functional ○ Under renovation ○ Under construction</Text>
          <Text>○ Dilapidated ○ Abandoned</Text>
        </View>

        <TouchableOpacity
  style={styles.nextButton}
  onPress={() => router.push('/FormStartSubmission1')}
>
  <Text style={styles.nextText}>Next</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4,
  },
  link: {
    color: 'teal',
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 12,
    borderRadius: 8,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 4,
  },
  text: {
    marginTop: 10,
  },
  nextButton: {
    marginTop: 14,
    backgroundColor: '#e0ffe0',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  nextText: {
    fontWeight: 'bold',
  },
});
