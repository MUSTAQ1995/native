import React from 'react';
import { View, Text, StyleSheet } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";


const Home = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.textstyle} >Home Page</Text>
      {/* <Text>
        <Icon 
          name='person'
          size={50}
        />
      </Text> */}
      {/* <Icon.ToolbarAndroid 
        title="Home"
        titleColor="black"
        navIconName="md-arrow-back"
        // onIconClicked={props.navigator.pop}
        actions={[
          { title: 'Settings', iconName: 'md-settings', iconSize: 30, show: 'always' },
          { title: 'Follow me on Twitter', iconName: 'logo-twitter', iconColor: "#4099FF", show: 'ifRoom' },
        ]}
        overflowIconName="md-more"
      /> */}
      <Icon name="add" color="#4F8EF7" size={50} />
      <Text style={styles.textstyle} >Welcome to the Native world....</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  textstyle:{
    color:"#57504B",
    fontSize:21,
    fontFamily:"DancingScript-VariableFont_wght"
  }
})

export default Home;