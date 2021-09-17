import React from 'react'
import {StyleSheet, View, Text, LogBox, Image, TouchableOpacity} from 'react-native'

export default function AboutPage(){
    LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
        <Text style={styles.welcomText}>{`Hi! 스파르타코딩 앱개발
반에 오신것을 환영합니다`}</Text>
        <View style={styles.innerContainer}>
            <Image style={styles.aboutImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}/>
            <Text style={styles.contentText}>{`많은 내용을 간결하게 담아내려\n노력했습니다!`}</Text>
            <Text style={styles.wishText}>{`꼭 완주 하셔서 꼭 여러분의 것으로 만들어가시길 바랍니다`}</Text>
            <TouchableOpacity style={styles.instaButton}>
                <Text style={styles.instaButtonText}>여러분의 인스타계정</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#12154D"
    },
    welcomText:{
        fontSize:36,
        color:"#fff",
        alignSelf:"center",
        marginTop:50,
        marginBottom:50
    },
    innerContainer:{
        flex:1,
        marginBottom:50,
        marginLeft:25,
        marginRight:25,
        borderRadius:30,
        backgroundColor:"#fff"
    },
    aboutImage:{
        width:160,
        height:160,
        borderRadius:35,
        marginTop:80,
        alignSelf:"center"
    },
    contentText:{
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"center",
        textAlign:"center"
    },
    wishText:{
        marginTop:20,
        marginBottom:25,
        marginRight:10,
        marginLeft:10,
        fontSize:20,
        textAlign:"center",
        alignSelf:"center"
    },
    instaButton:{
        backgroundColor:"#FFBF00",
        alignSelf:"center",
        width:200,
        height:60,
        borderRadius:15
    },
    instaButtonText:{
        flex:1,
        color:"#fff",
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:20
    }
})