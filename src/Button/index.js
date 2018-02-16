import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Text from '../Text'

export default class Button extends Component {
   static propTypes = {
      color: PropTypes.string.isRequired,
      format: PropTypes.oneOf(['fill', 'outline', 'plain']).isRequired,
      name: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired,
      size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
   }

   static defaultProps = {
      color: 'rgba(208, 188, 149, 1)',
      format: 'fill',
      name: null,
      onPress:  () => {},
      size: 'medium'
   }

   setNativeProps = (nativeProps) => {
      this.button.setNativeProps(nativeProps)
   }

   render() {
      const { color, format, name, onPress, size, ...props } = this.props
      const style = StyleSheet.create({
         button: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 12,
            borderRadius: 8
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
            borderColor: color,
            borderWidth: 2
         },
         plain: {
            backgroundColor: 'transparent'
         }
      })

      const buttonStyles = [style.button, style[format], style[size]]

      return (
         <TouchableOpacity onPress={onPress}>
            <View ref={(node) => { this.button = node }} style={buttonStyles} {...props}>
               <Text style={{ color }} uppercase>{name}</Text>
            </View>
         </TouchableOpacity>
      )
   }
}
