import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={style.titleContainer}>
        <ThemedText style={style.titleText}>Hello world</ThemedText>
      </ThemedView>
    </>
  );
}


const style = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleText: {
    color: "red",
    fontSize: 32,
    textAlign: "center",
  },
})

