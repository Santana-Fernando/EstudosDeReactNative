import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
    Display:{
        flex:1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'gray',
        alignItems: 'flex-end'
    },
    displayValues:{
        fontSize: 60,
        color: '#fff'
    }
})

export default props => {
  return (
    <View style={styles.Display}>
        <Text 
        style={styles.displayValues}
        numberOfLines={1}
        >
            {props.value}
        </Text>
    </View>
  );
};
