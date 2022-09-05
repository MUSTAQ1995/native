import React, { useState, useCallback } from 'react'
import { View, ScrollView, RefreshControl, StyleSheet, Text } from 'react-native'


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const ScrollRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(()=> setRefreshing(false));
  }, []);

  return (
    <View style={styles.container} >
      <ScrollView 
        contentContainerStyle={styles.scrollview}
        refreshControl={
          <RefreshControl 
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>Pull down to see RefreshControl indicator!</Text>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  scrollview: {
    flex:1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: 'center'
  },
});

export default ScrollRefresh;