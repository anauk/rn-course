import React from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props =>{
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info)=>(
        <ListItem
          placeName={info.item.name}
          imagePlace={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
          />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}
const styles=StyleSheet.create({
  listContainer:{
    width: '100%'
  }
})


export default PlaceList