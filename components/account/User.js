import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const User = props => (
    <SafeAreaView>
        <Text>USERNAME</Text>
        <Text>subinfo</Text>
        <TouchableOpacity>
            <Text>Log Out</Text>
        </TouchableOpacity>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default User;