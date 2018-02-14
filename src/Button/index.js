import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Text from '../Text'

export default class Button extends Component {
   static propTypes = {
      format: PropTypes.oneOf(['fill', 'outline', 'plain']),
      name: PropTypes.string,
      onPress: PropTypes.func,
      size: PropTypes.oneOf(['small', 'medium', 'large']),
   }

   static defaultProps = {
      format: 'medium',
      name: null,
      onPress:  () => {},
   }

   setNativeProps = (nativeProps) => {
      this._root.setNativeProps(nativeProps)
   }

   render() {
      const { format, name, onPress, ...props } = this.props
      const buttonStyles = [style.button, style[format], style[size]]
      let buttonText = name

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
      paddingHorizontal: 12
   },
   small: {
      height: 36
   },
   medium: {
      height: 42
   },
   large: {
      height: 60
   },
   fill: {
      backgroundColor: 'rgba(208, 188, 149, 0.2)'
   },
   outline: {
      borderColor: 'rgba(208, 188, 149, 0.5)',
      borderWidth: 2,
      borderRadius: 8
   },
   plain: {
      backgroundColor: 'transparent'
   }
})
