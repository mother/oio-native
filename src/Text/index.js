import React, { Component } from 'react'
import { Text as TextNative, StyleSheet } from 'react-native'

export default class Text extends Component {
   // static propTypes = {
   //    size: React.PropTypes.oneOfType([
   //       React.PropTypes.string,
   //       React.PropTypes.number
   //    ]),
   //    weight: React.PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold']),
   //    uppercase: React.PropTypes.bool
   // }

   // static defaultProps = {
   //    size: 3,
   //    weight: 'normal',
   //    uppercase: false
   // }

   setNativeProps = (nativeProps) => {
      this._root.setNativeProps(nativeProps)
   }

   render() {
      const { children, size, style, weight, uppercase, ...props } = this.props
      const textStyles = [styles[size], styles[weight]]
      let textBody = children

      if (style) {
         textStyles.push(style)
      }

      if (uppercase) {
         textBody = children.toUpperCase()
      }

      return (
         <TextNative ref={component => this._root = component} style={textStyles} {...props}>
            {textBody}
         </TextNative>
      )
   }
}

const styles = StyleSheet.create({
   1: {
      fontSize: 10
   },
   2: {
      fontSize: 13
   },
   3: {
      fontSize: 15
   },
   4: {
      fontSize: 17
   },
   5: {
      fontSize: 21
   },
   6: {
      fontSize: 24
   },
   7: {
      fontSize: 30
   },
   normal: {
      fontWeight: "400"
   },
   medium: {
      fontWeight: "500"
   },
   semibold: {
      fontWeight: "600"
   },
   bold: {
      fontWeight: "700"
   },
   black: {
      fontWeight: "900"
   }
})
