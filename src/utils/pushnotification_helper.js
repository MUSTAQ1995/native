import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { getToken } from "../services/config"

export const  requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getPushToken()
  }
}


const getPushToken = async () => {
  const token = await getToken();
  if(!token) { 
    try {
      const pushtoken = await messaging.getToken();
      if(pushtoken){
        console.log(pushtoken, "new token")
        await AsyncStorage.setItem("pushtoken", pushtoken)
      }
    } catch(error){
      console.log(error)
    }
  }
};

export const NotificationListner = () => {
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
      });

      messaging().onMessage(async remoteMessage => {
        console.log("Notification on froground state ..............", remoteMessage)
      })
}
