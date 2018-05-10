import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
   const { buttonStyle, textStyle } = styles;

   return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
         <Text style={textStyle}>
            {children}
         </Text>
      </TouchableOpacity>
   );
};

const styles = {
   buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderColor: '#007aff',
      borderWidth: 2,
      marginLeft: 5,
      marginRight: 5
   },
   textStyle: {
      fontSize: 16,
      fontWeight: '600',
      alignSelf: 'center',
      color: '#007aff',
      paddingTop: 10,
      paddingBottom: 10
   }
}

export default Button;
