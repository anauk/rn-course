import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem'

export default class App extends Component{
  state = {
    placeName:'',
    places:[]
  }
  placeNameChange=(val)=>{
    this.setState({
        placeName: val
      })
  }
  placeOnButton=()=>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState=>{
      return{
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }
  render(){
    const placesOutput = this.state.places.map((place,i)=><ListItem key={i} placeName={place} />
    )
    return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder="enter something"
        style={styles.input}
        value={this.state.placeName}
        onChangeText={this.placeNameChange}/>
        <Button
          title='ADD'
          style={styles.button}
          onPress={this.placeOnButton}
        />
      </View>
      <View style={styles.listContainer}>{placesOutput}</View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
  listContainer:{
    width: '100%',

  }
});
