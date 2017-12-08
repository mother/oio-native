import React from 'react'
import { View } from 'react-native'

const Spacer = ({ size }) => {
   const spacerHeight = size * 6

   return (
      <View style={{ width: '100%', height: spacerHeight }} />
   )
}

Spacer.propTypes = {
   size: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
   ]).isRequired
}

export default Spacer
