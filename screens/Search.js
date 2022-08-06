import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';


export default class SearchScreen extends Component{ 
    render(){
        return(
            <Veiw style={styles.container}>
                <Text style={styles.text}> SearchScreen</Text>
            </Veiw>
        )
    }

}
const styles=StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#5653D4"
    },
    text:{
        color:"#FFFFFF",
        FontSize:30
    }
})
