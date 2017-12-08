import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import Text from '../Text'

export default class Button extends Component {
   setNativeProps = (nativeProps) => {
      this._root.setNativeProps(nativeProps)
   }

   render() {
      const { name, onPress, ...props } = this.props
      let buttonText = name

      return (
         <TouchableOpacity onPress={onPress}>
            <View ref={component => this._root = component} style={styles.outline} {...props}>
               <Text style={{
                  color: 'rgba(208, 188, 149, 1)'
               }} uppercase>
                  {buttonText}
               </Text>
            </View>
         </TouchableOpacity>
      )
   }
}

const styles = StyleSheet.create({
   outline: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgba(208, 188, 149, 0.5)',
      borderWidth: 2,
      borderRadius: 8,
      padding: 12
   }
})
