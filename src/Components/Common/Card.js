import React from 'react';
import {View } from 'react-native';


//is card ke andar jo pichla text tag h .. wo as a prop pass hoga ... toe uske liye we have to use it as its cgildren
const Card = (props) =>{
    return(
        <View style={styles.containerStyle}> 
            {props.children}
        </View>
    );
};

const styles={
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth: 0,
        shadowColor:'#000',
        shadowOffset:{
            width:0,height:2
        },
        shadowOpacity:0.1,
        showRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    }
}

export {Card};