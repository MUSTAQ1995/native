import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Modal, Alert, Pressable, Button } from 'react-native';
import SpringPark from "../assets/svgs/spring-park.svg";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Map from './components/Map';
import Location from './components/Location';
import ScrollRefresh from './components/ScrollRefresh';
import StatusBar from './components/StatusBar';
import SwitchComp from './components/SwitchComp';
import FileUpload from './components/FileUpload';
const backgroundImage = { uri: '../assets/pngs/bg1.jpg' }

const Home = ({ navigation }) => {

    const [modalView, setModalView] = useState(false);
    const [imageDetails, setImageDetails] = useState([]);
    const [value, setValue] = useState({
        data: {
            name: "mustaq",  
            email: "email@gmail.com",
        }
    });

    const [singleImage, setSingleImage] = useState("");


    const gotoContacts = () => {
        navigation.navigate("Contacts", value)
    }

    const cameraAcess = () =>{ launchCamera({
        mediaType:"photo" || "video",
        maxHeight: 100,
        maxWidth:100,
        videoQuality:"high",
        durationLimit: 30,
        quality: 1,
        cameraType:"front",
        includeBase64: true,
        saveToPhotos: true,
        selectionLimit:0,
    }, (data) => {
        // setImageDetails(data?.assets);
    });};

    const gallaryAcess = () =>{ launchImageLibrary({
        mediaType:"photo" || "video",
        maxHeight: 100,
        maxWidth:100,
        videoQuality:"high",
        durationLimit: 30,
        quality: 1,
        cameraType:"front",
        includeBase64: true,
        saveToPhotos: true,
        selectionLimit:0,
    }, (data)=>{
        data?.assets && setImageDetails(data.assets) ;
       
    });};

    return (
        <ImageBackground source={require("../assets/pngs/bg.jpg")} style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
             {/* <View style={styles.gallary} >
                    <Button 
                        title='kamera'   
                        onPress={()=>cameraAcess()} 
                        color="#841584"
                    />
                     <Button 
                        title='Gallary'
                        onPress={()=>gallaryAcess()} 
                        color="#000"
                    />
                </View> */}
                {/* {
                   imageDetails?.length > 0 && imageDetails?.map((imageData, ind) =>{
                    return ( 
                        <View key={ind}>
                        {imageData ?<Image
                    source={{
                        uri: imageData.uri
                    }}
                        style={styles.picture}
                    />: null }
                    
                    </View>
                    )
                   })
                } */}
                
                   {/* <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    style={styles.picture}
                    source={require("../assets/pngs/eyes.jpg")}
                />
                <Image
                    source={{
                        uri: "https://reactnative.dev/img/tiny_logo.png"
                    }}
                    style={styles.logo}
                />
                <Image
                    source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                    }}
                    style={styles.logo}
                />
                <SpringPark width={200} height={200} fill={"red"} />
                <View style={styles.centeredView} >
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalView}
                        onRequestClose={() =>{
                            Alert.alert("Modal has been closed.");
                            setModalView(!modalView)
                        }}
                    >
                        <View style={styles.centeredView} >
                            <View style={styles.modalview}>
                                 <Text style={styles.modaltext} >Hey Welcome</Text>
                            </View>
                            <Pressable 
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalView(false)}
                            >
                                <Text style={styles.textStyle} >Hide Modal</Text>
                            </Pressable>
                        </View> 
                    </Modal>
                    <Pressable 
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() =>setModalView(true)}
                    >
                        <Text style={styles.textStyle} >Show Modal</Text>
                    </Pressable>
                </View> */}
                {/* {imageDetails.length > 0 ? 
                <View>    
                    <Button 
                        title="Contacts"
                        onPress={()=> gotoContacts()}
                    />               
                    <StatusBar/>
                    <SwitchComp/>
                    <FileUpload singleImage={imageDetails} />
                   
                </View>
                : null} */}
                 <Map/>
            </ScrollView>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    gallary: {
        flex:1,
    }, 
    picture: {
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 20,
        width: 100,
        height: 100,
    },
    logo: {
        height: 50,
        width: 50,
    },
    pic_svg: {
        width: 100,
        height: 100,
    },
    background: {
        flex: 1,
        justifyContent: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalview: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default Home;

