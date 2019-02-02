import React,{Component} from 'react';
import {View,Text} from 'react-native';

import {Header, Button, Spinner} from './Components/Common';

import LoginForm from './Components/LoginForm';
import  firebase from 'firebase';

class App extends Component{

    state={
        loggedIn :null,
    };

    componentWillMount(){
        firebase.initializeApp({
             apiKey: 'AIzaSyDyz2ceF5eSlwzGWTNWo-PaPwK-S4nNqM4',
             authDomain: 'auth-82bd6.firebaseapp.com',
             databaseURL: 'https://auth-82bd6.firebaseio.com',
             projectId: 'auth-82bd6',
             storageBucket: 'auth-82bd6.appspot.com',
             messagingSenderId: '829394261519' 
        }); 

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }
            else{
                this.setState({loggedIn:false});
            }

        });

     }

     renderContent(){
        switch(this.state.loggedIn){
            case true:
                return(  <Button 
                    onPress={()=>firebase.auth().signOut()}

                >
                Log out
                </Button>);
            case false:
            return<LoginForm/>;
            default:
            return <Spinner size='large'/>;
        }
    }
    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App; 