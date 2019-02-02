import React,{Component} from 'react';
import {View, TextInput,Text} from 'react-native';
import {Button,Card,CardSection,Input, Spinner} from './Common';
import firebase from 'firebase';

class LoginForm extends Component{

     //to hld the data in textinput state of that text input is used
     state={
         email: '',
        password:'',
        error:'',
        loading: false,
     }
//if sucess then, .then is run and if error then, .catch is run
     onButtonPress(){
        const {email,password}=this.state;
        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
     }
// we use .bind(this) with is a functionn when we dont know , in which context the given function will be called or whn it will be called

     onLoginSuccess(){
         this.setState({
             email:'',
             password:'',
             loading: false,
             error:'',

         });
     }

     onLoginFail(){
         this.setState({
            email:'',
            password:'',
            loading:false,
            error:'',
         });
     }
    


     renderButton(){
         if(this.state.loading){
            return <Spinner size='small' />;
         }
         return(
            <Button
             onPress={this.onButtonPress.bind(this)}
            >
              Log in
             </Button>
         );
     };
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    placeholder='user@email.com'
                    label='Email'
                    value={this.state.email} 
                    onChangeText={email => {this.setState({email})}}
                    />
                </CardSection>
                  
                <CardSection>
                <Input
                    secureTextEntry={true}
                    label='Password'
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={password=>{this.setState({password})}}
                    />
                </CardSection>
                <Text style={styles.error}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    error:{
        fontSize:20,
        alignSelf:'center',
        color:'red',
    }
}

// to get input from user , use text input, by default their height and width are zero , so we have to styke them ,,a ccording to our need
export default LoginForm;

//onChaneText and value props can be used to handle any change in text input
