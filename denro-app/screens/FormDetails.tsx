import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FormDetails() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Details</Text>
      <Text style={styles.subtitle}>This is where your form will go.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#666',
  },
});
