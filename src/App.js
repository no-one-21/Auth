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
             apiKey: '',
             authDomain: '',
             databaseURL: '',
             projectId: '',
             storageBucket: '',
             messagingSenderId: '' 
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
