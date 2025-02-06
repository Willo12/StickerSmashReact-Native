import { Stack, Link } from "expo-router"
import { StyleSheet, View } from "react-native"

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'not found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>Go back to home screen!</Link>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
