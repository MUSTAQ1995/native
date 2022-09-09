import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import storage from "@react-native-firebase/storage";


function FileUpload({ singleImage }) {
  const [promises, setPromises ] = useState([]);
  let [imageUrl, setImageUrl] = useState([]);


  const check = (UrlData) =>{
    console.log("Checking the update",UrlData)
  }
//   const uploadImage = () => {
//     console.log("upload image")
//   let reference = storage().ref(singleImage[0].fileName);
//   let task  = reference.putFile(singleImage[0].uri);

//   task.then(() => {
//     console.log("Image is uploaded to bucket");
//   }).catch((e) => console.log("uploading image error", e));
// }
  const uploadImage = async () => {
    let counter= 0;
    const UrlData=[]
    {singleImage && singleImage.map((images, ind) => {
      const uploadTask = storage().ref().child(images.fileName).putFile(images.uri);
      promises.push(uploadTask)
      uploadTask.on("state_changed", taskSnapShot => {
        const progress = ((taskSnapShot.bytesTransferred / taskSnapShot.totalBytes) * 100) / 100;
      }, (error) => {
        setIsLoading(false);
        console.log(error)
      },  () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          UrlData.push(url);
          setImageUrl(UrlData)
          counter = counter+1;
          if(singleImage.length == counter){
            check(UrlData);
          }
          console.log(UrlData, "data at download")
        })
      })
    })}
    //  Promise.all(promises).then(value => {
    //   check();
    //   })
    //   .catch(error => console.log(error))
  }

  return (
    <View>
      <Button 
        title="File upload"
        onPress={() => uploadImage()}
      />
        <Button 
        title="Check upload"
        onPress={() => console.log(UrlData, "UrlData")}
      />
    </View>
  )
}

export default FileUpload;