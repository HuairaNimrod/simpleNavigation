import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Profile;