import React,{Component} from 'react'
import {Button, TextInput, View, StyleSheet} from "react-native";

class PlaceInput extends Component{
  state = {
    placeName:''
  }
  placeNameChange=(val)=>{
    this.setState({
      placeName: val
    })
  }
  onPlaceAdded=()=>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.props.onPlaceAdded(this.state.placeName)
  }
  render(){
    return(
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="enter something"
          style={styles.input}
          value={this.state.placeName}
          onChangeText={this.placeNameChange}/>
        <Button
          title='ADD'
          style={styles.button}
          onPress={this.onPlaceAdded}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  input: {
    width:'70%',
  },
  button:{
    width:'30%',
  },
  inputContainer: {
    width: '100%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default PlaceInput