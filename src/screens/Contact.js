import React from 'react'
import { View, Text, Button } from 'react-native'

const Contact = ({
    navigation, route,
}) => {
  const {data} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>
            Contact
        </Text>
        <Text>
          {data.name}
        </Text>
        <Button
          onPress={()=> navigation.goBack()}
          title="Home"
        />
    </View>
  )
};

export default Contact;