import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Text from '../Text'

export default class Button extends Component {
   static propTypes = {
      name: React.PropTypes.string,
      onPress: React.PropTypes.func,
      outline: React.PropTypes.bool,
      plain: React.PropTypes.bool
   }

   static defaultProps = {
      name: null,
      onPress:  () => {},
      outline: false,
      plain: false
   }

   setNativeProps = (nativeProps) => {
      this._root.setNativeProps(nativeProps)
   }

   render() {
      const { name, onPress, plain, ...props } = this.props
      const buttonStyles = [style.button]
      let buttonText = name

      if (outline) {
         buttonStyles.push(style.outline)
      }

      return (
         <TouchableOpacity onPress={onPress}>
            <View ref={component => this._root = component} style={buttonStyles} {...props}>
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

const style = StyleSheet.create({
   button: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12
   },
   outline: {
      borderColor: 'rgba(208, 188, 149, 0.5)',
      borderWidth: 2,
      borderRadius: 8
   }
})
