import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

const Spacer = ({ size }) => {
   const spacerHeight = size * 6

   return (
      <View style={{ width: '100%', height: spacerHeight }} />
   )
}

Spacer.propTypes = {
   size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]).isRequired
}

export default Spacer
