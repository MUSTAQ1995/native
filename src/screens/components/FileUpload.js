import React from "react";
import { View, Button } from "react-native";
import { utils } from "@react-native-firebase/app";
import storage from "@react-native-firebase/storage";


function FileUpload() {
  const reference = storage().ref("../../assets/pngs/eyes.jpg")

  return (
    <View>
      <Button 
        onPress={async () => {
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
          await reference.putFile(pathToFile)
        }}
      />
    </View>
  )
}

export default FileUpload;