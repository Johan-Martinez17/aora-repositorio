import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyless,
  textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyless} ${isLoading ? 'opacity-50': ''}`}
      disabled={isLoading}
    >

      <Text className= {`text-primary font-psmeibold 
      text-lg ${textStyles}`}>
        {title}  
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton