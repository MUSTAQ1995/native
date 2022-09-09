import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import AutoComplete from "react-native-autocomplete-input";


const AutoCompleter = () => {
  //states:
    const [MainJSON, setMainJSON] = useState([]);
    const [FilterData, setFilterData] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

  // side effects:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((json) => {
        setMainJSON(json);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  // handlers:
  const SearchDataFromJSON = (query) => {
    if(query){
      const regex = new RegExp(`${query.trim()}`, "i");
      setFilterData(
        MainJSON.filter((data) => data.title.search(regex) >= 0)
      );
    } else {
      setFilterData([]);
    }
  };
  // -------------------------------------------------------------
  return (
    <View style={styles.container}>
      <AutoComplete 
        autoCapitalize = "none"
        autoCorrect={false}
        containerStyle={styles.AutoCompleteStyle}
        data={FilterData}
        defaultValue={
          JSON.stringify(selectedItem) === "{}"? "" : selectedItem.title
        }
        keyExtractor={(item, i) => i.toString()}
        onChangeText={(text) => SearchDataFromJSON(text)}
        placeholder="Type the serach keyword...."
        renderItem={({item})=>console.log(item)}
      />
      <View style={styles.selectedTextContainer} >
        {
          <Text style={styles.selectedTextContainer} >
            {JSON.stringify(selectedItem)}
          </Text>
        }
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex:1,
    width: 400,
    padding:12,
  },
  AutoCompleteStyle: {
    flex:1,
    left:0,
    position:"absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    borderWidth: 1,
  },
  SearchBoxTextItem: {
    margin: 5,
    fontSize: 16,
    paddingTop: 4,
  }, 

  selectedTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  selectedTextContainer: {
    textAlign: "center",
    fontSize: 18,
  },
})

export default AutoCompleter