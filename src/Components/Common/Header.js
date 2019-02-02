//import libraries for making a componet
import React from 'react';
import { Text ,View } from 'react-native';


//make a component
const Header = (props) =>{
    const { textStyle, viewStyle} = styles;
    return (
        <View style={ viewStyle }>
         <Text style={textStyle}>
            {props.headerText}
         </Text>
        </View>
    );

};

//styling : consists of javascript objects

const styles = {
    textStyle:{
        fontSize:20,
        
    },
    viewStyle:{
        backgroundColor:'#F8F8F8',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.9,
        elevation:2,
        position:'relative', 
    }

} 

// make the component available for others
export {Header};