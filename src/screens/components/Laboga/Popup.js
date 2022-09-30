import React from 'react'
import { View, Text } from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import { renderers } from 'react-native-popup-menu';
const { SlideInMenu } = renderers;

const Popup = () => {
  return (
    <Menu onSelect={value => alert(`Selected number: ${value}`)} >
      <MenuTrigger text='This Month' />
      <MenuOptions>
        <MenuOption value={1} text="This Month" />
        <MenuOption value={2} text="This week" />
        <MenuOption>
          <Text style={{ color: "red" }} >Today</Text>
        </MenuOption>
        <MenuOption value={4} disabled={true} text="disabled" />
      </MenuOptions>
    </Menu>
  )
}

export default Popup