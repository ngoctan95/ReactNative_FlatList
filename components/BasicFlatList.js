import React,{Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import flatListData from '../data/flatListData';
export default class BasicFlatList extends Component{
    render(){
        return(
            <View>
                <FlatList
                data={flatListData}
                renderItem={({item})=>{
                    console.log(`item=${JSON.stringify(item)},index=${item}`);
                }}/>
            </View>
        );
    }
}